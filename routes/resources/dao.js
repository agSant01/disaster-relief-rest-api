const db = require('../../database');
const querylib = require('./queries');

exports.getAllTypes = async () => {
    const result = await db.query(querylib.qAllTypes);

    const msg = {
        count: result.rowCount,
        resource_types: result.rows,
    };

    return msg;
};

exports.getResourceTypeAttributesById = async (resourceType) => {
    let query = {
        text: querylib.qTypeAttribute,
        values: [resourceType],
    };

    const result = await db.query(query);

    let set = new Set();

    result.rows.forEach((val, inx) => set.add(val.attribute_name));

    console.log(set, set.size);

    const msg = {
        resource_attributes: result.rows,
    };

    return msg;
};

exports.getAllPurchases = async () => {
    const result = await db.query(querylib.qPurchases);

    const msg = {
        count: result.rowCount,
        purchases: result.rows,
    };

    return msg;
};

exports.getPurchaseById = async (id) => {
    const query = {
        text: querylib.qPurchasesByID,
        values: [id],
    };

    const result = await db.query(query);

    const msg = {
        purchase: result.rows,
    };

    return msg;
};

exports.getAvailableResourcesByProviderId = async (provider_id) => {
    const query = {
        text: querylib.qGetAllResourcesAvailableByProviderWithOptKeyword,
        values: [provider_id, `%${keyword.toLowerCase().replace(/\s/g, '')}%`],
    };

    console.log(query);

    const result = await db.query(query);

    const msg = {
        count: result.rowCount,
        supplier_id: Number(provider_id),
        resources_available: result.rows,
    };

    return msg;
};

exports.getAllAvailableResources = async (keyword) => {
    let query = querylib.qGetAllResourcesAvailable;

    if (keyword) {
        console.log(keyword);

        query = {
            text: querylib.qGetAllResourcesAvailableByKeyword,
            values: [`%${keyword.toLowerCase().replace(/\s/g, '')}%`],
        };
    }

    const result = await db.query(query);

    const msg = {
        count: result.rows.length,
        resources_available: result.rows,
    };

    return msg;
};

exports.getAvailableResourceById = async (resourceId) => {
    const query = {
        text: querylib.qGetAllResourcesAvailableByResourceId,
        values: [resourceId],
    };

    console.log(query);

    const result = await db.query(query);

    const msg = {
        count: result.rows.length,
        resources_available: result.rows,
    };

    return msg;
};

exports.getAllRequests = async (keyword) => {
    let query = querylib.qGetAllRequests;

    if (keyword) {
        console.log(keyword);

        query = {
            text: querylib.qGetAllRequestsByKeyword,
            values: [`%${keyword.toLowerCase().replace(/\s/g, '')}%`],
        };
    }

    const result = await db.query(query);

    const msg = {
        count: result.rowCount,
        requests: result.rows,
    };

    return msg;
};

exports.getRequestById = async (reqid) => {
    const query = {
        text: querylib.qGetRequestsById,
        values: [reqid],
    };
    const result = await db.query(query);
    return {
        count: result.rowCount,
        requests: result.rows,
    };
};

exports.getAllReserves = async () => {
    const result = await db.query(querylib.getAllReservedResources);
    return {
        count: result.rowCount,
        reserves: result.rows,
    };
};

exports.getReserveById = async (resid) => {
    const query = {
        text: querylib.getAllReservedResourcesById,
        values: [resid],
    };
    const result = await db.query(query);
    return {
        count: result.rowCount,
        reserves: result.rows,
    };
};

exports.getAllResources = async (is_debug) => {
    const query = {
        text: is_debug
            ? querylib.qGetResourceAllResourcesDebug
            : querylib.qGetResourceAllResources,
    };
    const result = await db.query(query);
    return {
        count: result.rowCount,
        resource: result.rows,
    };
};

exports.getResourceById = async (resid, is_debug) => {
    const query = {
        text: is_debug
            ? querylib.qGetResourceByIdDebug
            : querylib.qGetResourceById,
        values: [resid],
    };
    const result = await db.query(query);
    return {
        count: result.rowCount,
        resource: result.rows,
    };
};

exports.getResourceAttributeByTypeName = async (resourceTypeName) => {
    const query = {
        text: querylib.qAttributByType,
        values: [resourceTypeName],
    };
    const result = await db.query(query);
    return {
        count: result.rows.length,
        resource_attributes: result.rows,
    };
};

exports.insertAvailableResource = async (
    userid,
    city,
    latitude,
    longitude,
    quantity,
    price,
    is_for_sale,
    resource_type,
    attributes,
    delivery_option
) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();

    let attr;

    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        // validate that user is requester and get city
        const supplierInfo = await client.query(querylib.qSupplierInfo, [
            userid,
        ]);

        const requesterCity = await client.query(querylib.qGetCity, [city]);

        // if no result requester does not exist
        if (supplierInfo.rowCount == 0) {
            await client.query('ROLLBACK');
            let error = Error('invalid credential');
            error.response_msg = `User with id: '${userid}' is not a supplier.`;
            error.status = 400;
            throw error;
        }

        // validate qty of attrbs
        const attrbsDefinitions = await client.query(
            querylib.qGetAttributeFields,
            [resource_type]
        );

        let attrbsSet = new Set();

        // put all the field names in a set for use in comparing
        // amount and validating that all attributes were added
        attrbsDefinitions.rows.forEach((row) => {
            attrbsSet.add(row.resource_type_field_name.toLowerCase());
        });

        // used for if the resource can be bought or rented
        let hasTransactionType = attrbsSet.has('transaction type');
        let isBought = false;

        console.log(attrbsSet);

        // prepare query object
        const insertResource = {
            text: querylib.qInsertResource,
            values: [
                quantity,
                latitude,
                longitude,
                resource_type,
                requesterCity.rows[0].cityid, // city id
            ],
        };

        // insert resource, returns a row with resource_id
        const resourceId = await client.query(insertResource);
        const generatedResourceId = resourceId.rows[0].resource_id;

        // insert each attribute
        for (attr of attributes) {
            if (
                hasTransactionType &&
                attr.attr_name.toLowerCase() == 'transaction type' &&
                attr.attr_value.toLowerCase() == 'buy'
            ) {
                isBought = true;
            }

            let insertAttr = {
                text: querylib.qInsertAttributes,
                values: [
                    generatedResourceId, // resource_id of recently created resource
                    attr.attr_name,
                    attr.attr_value,
                    resource_type,
                ],
            };

            // print query obj
            console.log(insertAttr);

            // insert attribute
            await client.query(insertAttr);

            // delete created attribute of recently inserted attrbute
            attrbsSet.delete(attr.attr_name.toLowerCase());

            // print remaining attributes
            console.log(attrbsSet);
        }

        // verify if it is bought, if it is bough then remove
        // 'Duration Period Unit' and 'Duration Period' from attribute set
        if (isBought) {
            attrbsSet.delete('duration period unit');
            attrbsSet.delete('duration period');
        }

        // if the remaining amount of required-attributes after adding all the
        // provided fields in the payload raise and error and do a rollback
        if (attrbsSet.size > 0) {
            await client.query('ROLLBACK');

            let error = Error('missing attributes');
            error.response_msg = `Not all attributes specified. Missing: '${Array.from(
                attrbsSet
            ).join(', ')}'`;
            error.status = 400;
            throw error;
        }

        if (price) {
            is_for_sale = true;
        } else if (is_for_sale != undefined) {
            if (is_for_sale == false) {
                price = 0;
            }
        }

        const insertSubmitQuery = {
            text: querylib.qInsertSubmit,
            values: [
                generatedResourceId,
                userid,
                price,
                is_for_sale,
                delivery_option,
            ],
        };

        console.log(insertSubmitQuery);

        await client.query(insertSubmitQuery);

        await client.query('COMMIT');

        const msg = {
            msg: 'Resource submitted succesfully.',
            resource_id: generatedResourceId,
        };

        return msg;
    } catch (error) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.', error);
        await client.query('ROLLBACK');

        if (error.code == '23502') {
            console.log('not_null_violation');
            if (error.column == 'resource_type_field_value') {
                error.response_msg = `Invalid resource attribute value:'${attr.attr_value}' for attributeField:'${attr.attr_name}' for resource:'${resource_type}'`;
            } else if (error.column == 'resource_type_field_name') {
                error.response_msg = `Invalid resource attribute:'${attr.attr_name}' for resource:${resource_type}`;
            }
            error.status = 400;
        }

        throw error;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};

exports.insertResourceRequest = async (userid, city, requested_resources) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();

    let attr, resource;

    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        // validate that user is requester
        const requesterInfo = await client.query(querylib.qRequesterInfo, [
            userid,
        ]);

        // validate and get city *******
        const requesterCity = await client.query(querylib.qGetCity, [city]);

        // if no result requester does not exist
        if (requesterInfo.rowCount == 0) {
            await client.query('ROLLBACK');

            let error = Error('invalid credential');

            error.response_msg = `User with id: '${userid}' is not a requestor.`;
            error.status = 401;
            throw error;
        }
        //if no result city does not exist
        if (requesterCity.rowCount == 0) {
            await client.query('ROLLBACK');
            let error = Error('invalid city');
            error.response_msg = `User with id: '${city}' is not a city.`;
            error.status = 400;
            throw error;
        }

        // create request
        const requestId = await client.query(querylib.qInsertRequest, [userid]);

        // insert each resource
        for (resource of requested_resources) {
            console.log(resource);

            // validate qty of attrbs
            const attrbsDefinitions = await client.query(
                querylib.qGetAttributeFields,
                [resource.resource_type]
            );

            let attrbsSet = new Set();

            attrbsDefinitions.rows.forEach((value) => {
                attrbsSet.add(value.resource_type_field_name.toLowerCase());
            });

            // used for if the resource can be bought or rented
            let hasTransactionType = attrbsSet.has('transaction type');
            let isBought = false;

            console.log(attrbsSet);

            const insertResource = {
                text: querylib.qInsertResource,
                values: [
                    resource.quantity,
                    resource.latitude,
                    resource.longitude,
                    resource.resource_type,
                    requesterCity.rows[0].cityid,
                ],
            };

            const resourceId = await client.query(insertResource);

            // insert each attribute
            for (attr of resource.attributes) {
                if (
                    hasTransactionType &&
                    attr.attr_name.toLowerCase() == 'transaction type' &&
                    attr.attr_value.toLowerCase() == 'buy'
                ) {
                    isBought = true;
                }

                let insertAttr = {
                    text: querylib.qInsertAttributes,
                    values: [
                        resourceId.rows[0].resource_id,
                        attr.attr_name,
                        attr.attr_value,
                        resource.resource_type,
                    ],
                };
                console.log(insertAttr);

                await client.query(insertAttr);

                attrbsSet.delete(attr.attr_name.toLowerCase());

                console.log(attrbsSet);
            }

            // verify if it is bought, if it is bough then remove
            // 'Duration Period Unit' and 'Duration Period' from attribute set
            if (isBought) {
                attrbsSet.delete('duration period unit');
                attrbsSet.delete('duration period');
            }

            if (attrbsSet.size > 0) {
                await client.query('ROLLBACK');
                let error = Error('missing attributes');
                error.response_msg = `Not all attributes specified. Missing: '${Array.from(
                    attrbsSet
                ).join(', ')}'`;
                error.status = 400;
                throw error;
            }

            await client.query(querylib.qInsertRequestedResource, [
                requestId.rows[0].request_id,
                resourceId.rows[0].resource_id,
            ]);
        }

        await client.query('COMMIT');

        const msg = {
            msg: 'Request created succesfully.',
            request_id: requestId.rows[0].request_id,
        };

        return msg;
    } catch (e) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.', e);
        await client.query('ROLLBACK');

        if (e.code == '23502') {
            console.log('not_null_violation');
            if (e.column == 'resource_type_field_value') {
                e.response_msg = `Invalid resource attribute value:'${attr.attr_value}' for attributeField:'${attr.attr_name}' for resource:'${resource.resource_type}'`;
            } else if (e.column == 'resource_type_field_name') {
                e.response_msg = `Invalid resource attribute:'${attr.attr_name}' for resource:${resource.resource_type}`;
            }
            e.status = 400;
        }
        throw e;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};

exports.insertReservedResource = async (
    userid,
    reserves,
    city,
    latitude,
    longitude
) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();

    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        // validate that user is requester and get city
        const requesterInfo = await client.query(querylib.qRequesterInfo, [
            userid,
        ]);

        // if no result requester does not exist
        if (requesterInfo.rows.length == 0) {
            await client.query('ROLLBACK');
            let error = Error('invalid credential');
            error.response_msg = `User with userid: '${userid}' is not a requestor.`;
            error.status = 400;
            throw error;
        }

        // validate and get city *******
        const requesterCity = await client.query(querylib.qGetCity, [city]);

        //if no result city does not exist
        if (requesterCity.rowCount == 0) {
            await client.query('ROLLBACK');
            let error = Error('invalid city');
            error.response_msg = `User with id: '${city}' is not a city.`;
            error.status = 400;
            throw error;
        }

        // validate if there are available resources to reserve
        for (reserve of reserves) {
            console.log(reserve);

            const available = await client.query(
                querylib.qHasAvailableQuantityForReserveResourceById,
                [reserve.resource_id]
            );

            if (available.rows.length == 0) {
                console.log(
                    `Not possible quantity for resource. Doing Rollback`
                );

                await client.query('ROLLBACK');

                let error = Error(
                    `resource ${reserve.resource_id} is exhausted`
                );
                error.status = 401;
                error.response_msg = `Cannot reserve exhausted resource:${reserve.resource_id}.`;
                throw error;
            }

            let remaingQty = available.rows[0].available;

            if (remaingQty - reserve.quantity < 0) {
                console.log(`More than remaining. Doing Rollback`);

                await client.query('ROLLBACK');

                let error = Error(
                    'reserving more than remaining for resource',
                    reserves.resource_id
                );
                error.response_msg = `The resource:'${reserve.resource_id}' exists, but the remainint quantity is ${remaingQty} units. Cannot reserve ${reserve.quantity} units.`;
                error.status = 400;
                throw error;
            }
        }

        // create reserve
        const reserveId = await client.query(querylib.qInsertReserve, [
            userid,
            city,
            latitude,
            longitude,
        ]);

        for (reserve of reserves) {
            // insert every resource reserved
            await client.query(querylib.qInsertReservedResources, [
                reserveId.rows[0].reserve_id,
                reserve.resource_id,
                reserve.quantity,
            ]);
        }

        await client.query('COMMIT');

        const msg = {
            msg: 'Resource(s) reserved succesfully.',
            reserve_id: reserveId.rows[0].reserve_id,
        };

        return msg;
    } catch (error) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.', error);
        await client.query('ROLLBACK');
        throw error;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};

exports.insertPurchase = async (
    userid,
    city,
    purchases,
    latitude,
    longitude,
    payment_method
) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();

    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        // validate that user is requester and get city
        const requesterInfo = await client.query(querylib.qRequesterInfo, [
            userid,
        ]);

        // if no result requester does not exist
        if (requesterInfo.rows.length == 0) {
            await client.query('ROLLBACK');
            let error = Error('invalid credential');
            error.status = 400;
            error.response_msg = `User with userid: '${userid}' is not a requestor.`;
            throw error;
        }

        // validate if there are available resources to reserve
        for (purchase of purchases) {
            console.log(purchase);

            const available = await client.query(
                querylib.qHasAvailableQuantityForPurchaseResourceById,
                [purchase.resource_id]
            );

            if (available.rows.length == 0) {
                console.log(
                    `Not possible quantity for resource. Doing Rollback`
                );

                await client.query('ROLLBACK');
                let error = Error('invalid credential');
                error.status = 400;
                error.response_msg = `No resource available for purchase with resourceid: ${purchase.resource_id}`;
                throw error;
            }

            let remaingQty = available.rows[0].available;

            if (remaingQty - purchase.quantity < 0) {
                console.log(`More than remaining. Doing Rollback`);

                await client.query('ROLLBACK');
                let error = Error('invalid credential');
                error.status = 400;
                error.response_msg = `The resource:'${purchase.resource_id}' exists, but the remainint quantity is ${remaingQty} units. Cannot purchase ${purchase.quantity} units.`;
                throw error;
            }
        }

        // create purchase
        const purchaseId = await client.query(querylib.qInsertOrder, [
            userid,
            city,
            latitude,
            longitude,
            payment_method,
        ]);

        for (purchase of purchases) {
            // insert every resource purchased

            await client.query(querylib.qInsertPurchasedResources, [
                purchaseId.rows[0].order_id,
                purchase.resource_id,
                Number(purchase.quantity),
            ]);
        }

        await client.query('COMMIT');

        const msg = {
            msg: 'Resource(s) purchased succesfully.',
            purchase_id: purchaseId.rows[0].order_id,
        };

        return msg;
    } catch (error) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.', error);
        await client.query('ROLLBACK');
        throw error;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};
