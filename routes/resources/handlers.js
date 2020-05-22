const db = require('../../database');
const querylib = require('./queries');
const { validate } = require('indicative/validator');
const jsonSchemas = require('./post_schemas');
const ResourcesDao = require('./dao');

exports.getTypes = (req, res, next) => {
    ResourcesDao.getAllTypes()
        .then((result) => {
            console.log(result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503).json({ error: error.stack });
        });
};

exports.getAllResources = (req, res, next) => {
    let id = req.params.ID;
    const is_debug = req.query.debug == 'true';

    let query;

    if (id) {
        if (isNaN(Number(id))) {
            res.status(400).json({
                error:
                    "Invalid param for 'resource id'. Must be 'Integer' type.",
                invalid_param: id,
            });
            return;
        }
        console.log(id);
        query = {
            text: is_debug
                ? querylib.qGetResourceByIdDebug
                : querylib.qGetResourceById,
            values: [id],
        };
    } else {
        query = {
            text: is_debug
                ? querylib.qGetResourceAllResourcesDebug
                : querylib.qGetResourceAllResources,
        };
    }

    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.stack })
                .end();
            return;
        }

        let msg = {
            count: result.rowCount,
            resource: result.rows,
        };

        res.json(msg).end();
    });
};

/*
Returns the attributes associated with a particular resource type.
*/
exports.getResourceTypeAttributes = (req, res, next) => {
    let resourceType = req.params.id;

    if (isNaN(Number(resourceType))) {
        res.status(400).json({
            error:
                "Invalid param for 'resource type id'. Must be 'Integer' type.",
            invalid_param: resourceType,
        });
        return;
    }

    ResourcesDao.getResourceTypeAttributesById(resourceType)
        .then((result) => {
            console.log(result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503).json({ error: error.stack });
        });
};

exports.getResourceAttributesByType = (req, res, next) => {
    let resourceType = req.params.types;

    let query = {
        text: querylib.qAttributByType,
        values: [resourceType],
    };

    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.stack })
                .end();
            return;
        }

        let set = new Set();

        result.rows.forEach((val, inx) => set.add(val.attribute_name));

        console.log(set, set.size);

        const msg = {
            resource_attributes: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getAvailableResources = (req, res, next) => {
    const resourceId = req.params.resourceid;
    const keyword = req.query.keyword;

    let queryPromise;

    if (resourceId) {
        if (isNaN(Number(resourceId))) {
            res.status(400).json({
                error:
                    "Invalid param for 'resource id'. Must be 'Integer' type.",
                invalid_param: resourceId,
            });
            return;
        }
        queryPromise = ResourcesDao.getAvailableResourceById(resourceId);
    } else {
        queryPromise = ResourcesDao.getAllAvailableResources(keyword);
    }

    queryPromise
        .then((result) => {
            console.log(result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503).json({ error: error.stack });
        });
};

exports.getResourcesAvailableByProvider = (req, res, next) => {
    const provider_id = req.params.provider;
    const keyword = req.query.keyword || '';

    if (isNaN(Number(provider_id))) {
        res.status(400).json({
            error: "Invalid param for 'supplier id'. Must be 'Integer' type.",
            invalid_param: provider_id,
        });
        return;
    }

    ResourcesDao.getAvailableResourcesByProviderId(provider_id, keyword)
        .then((result) => {
            console.log(result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503).json({ error: error.stack });
        });
};

exports.getReservedResources = (req, res, next) => {
    const resid = req.params.reserveid;
    let queryPromise;

    if (resid) {
        if (isNaN(Number(resid))) {
            res.status(400).json({
                error:
                    "Invalid param for 'reserve id'. Must be 'Integer' type.",
                invalid_param: resid,
            });
            return;
        }

        queryPromise = ResourcesDao.getReserveById(resid);
    } else {
        queryPromise = ResourcesDao.getAllReserves();
    }

    queryPromise
        .then((result) =>
            res
                .status(200)
                .json(result)
                .end()
        )
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getRequests = (req, res, next) => {
    const reqid = req.params.id;
    const keyword = req.query.keyword;

    let queryPromise;

    if (reqid) {
        if (isNaN(Number(reqid))) {
            res.status(400)
                .json({
                    error:
                        "Invalid param for 'request id'. Must be 'Integer' type.",
                    invalid_param: reqid,
                })
                .end();
            return;
        }

        queryPromise = ResourcesDao.getRequestById(reqid);
    } else {
        queryPromise = ResourcesDao.getAllRequests(keyword);
    }

    queryPromise
        .then((result) =>
            res
                .status(200)
                .json(result)
                .end()
        )
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getPurchase = (req, res, next) => {
    const id = req.params.ID;

    // used to unwrap the result returned by the DAO
    let queryPromise;

    if (id) {
        if (isNaN(Number(id))) {
            res.status(400).json({
                error:
                    "Invalid param for 'purchase id'. Must be 'Integer' type.",
                invalid_param: id,
            });
            return;
        }

        queryPromise = ResourcesDao.getPurchaseById(id);
    } else {
        queryPromise = ResourcesDao.getAllPurchases();
    }

    queryPromise
        .then((result) =>
            res
                .status(200)
                .json(result)
                .end()
        )
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.postSubmitResource = (req, res, next) => {
    // Validate that the resource contains all the required fields
    validate(req.body, jsonSchemas.resourceSubmitSchema)
        .then((validatedData) => {
            console.log(validatedData);

            if (validatedData.is_for_sale == false && validatedData.price > 0) {
                res.status(400)
                    .json({
                        error:
                            'Cannot set `is_for_sale` to `false` and assign a price',
                    })
                    .end();
                return;
            }

            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();

                let attr;

                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    // validate that user is requester and get city
                    const supplierInfo = await client.query(
                        querylib.qSupplierInfo,
                        [validatedData.userid]
                    );

                    const requesterCity = await client.query(
                        querylib.qGetCity,
                        [validatedData.city]
                    );

                    // if no result requester does not exist
                    if (supplierInfo.rowCount == 0) {
                        await client.query('ROLLBACK');
                        res.status(400)
                            .json({
                                msg: `User with id: '${validatedData.userid}' is not a supplier.`,
                            })
                            .end();
                        return;
                    }

                    // validate qty of attrbs
                    const attrbsDefinitions = await client.query(
                        querylib.qGetAttributeFields,
                        [validatedData.resource_type]
                    );

                    let attrbsSet = new Set();

                    // put all the field names in a set for use in comparing
                    // amount and validating that all attributes were added
                    attrbsDefinitions.rows.forEach((row) => {
                        attrbsSet.add(
                            row.resource_type_field_name.toLowerCase()
                        );
                    });

                    // used for if the resource can be bought or rented
                    let hasTransactionType = attrbsSet.has('transaction type');
                    let isBought = false;

                    console.log(attrbsSet);

                    // prepare query object
                    const insertResource = {
                        text: querylib.qInsertResource,
                        values: [
                            validatedData.quantity,
                            validatedData.latitude,
                            validatedData.longitude,
                            validatedData.resource_type,
                            requesterCity.rows[0].cityid, // city id
                        ],
                    };

                    // insert resource, returns a row with resource_id
                    const resourceId = await client.query(insertResource);
                    const generatedResourceId = resourceId.rows[0].resource_id;

                    // insert each attribute
                    for (attr of validatedData.attributes) {
                        if (
                            hasTransactionType &&
                            attr.attr_name.toLowerCase() ==
                                'transaction type' &&
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
                                validatedData.resource_type,
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

                        // return the list of missing resource attributes
                        res.status(400)
                            .json({
                                error: `Not all attributes specified. Missing: '${Array.from(
                                    attrbsSet
                                ).join(',')}'`,
                            })
                            .end();

                        return;
                    }

                    let price = validatedData.price;
                    let isForSale = validatedData.is_for_sale;

                    if (price) {
                        isForSale = true;
                    } else if (isForSale != undefined) {
                        if (isForSale == false) {
                            price = 0;
                        }
                    }

                    const insertSubmitQuery = {
                        text: querylib.qInsertSubmit,
                        values: [
                            generatedResourceId,
                            validatedData.userid,
                            price,
                            isForSale,
                            validatedData.delivery_option,
                        ],
                    };

                    console.log(insertSubmitQuery);

                    await client.query(insertSubmitQuery);

                    await client.query('COMMIT');

                    const msg = {
                        msg: 'Resource submitted succesfully.',
                        resource_id: generatedResourceId,
                    };

                    res.status(201)
                        .json(msg)
                        .end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.');

                    let emsg = e.toString();
                    let status = 503;

                    if (e.code == '23502') {
                        console.log('not_null_violation');
                        if (e.column == 'resource_type_field_value') {
                            emsg = `Invalid resource attribute value:'${attr.attr_value}' for attributeField:'${attr.attr_name}' for resource:'${resource.resource_type}'`;
                        } else if (e.column == 'resource_type_field_name') {
                            emsg = `Invalid resource attribute:'${attr.attr_name}' for resource:${resource.resource_type}`;
                        }
                        status = 400;
                    }
                    console.log(e);
                    await client.query('ROLLBACK');

                    res.status(status)
                        .json({ error: emsg })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            res.status(400)
                .json(error)
                .end();
        });
};

exports.postResourceRequest = (req, res, next) => {
    // validate payload
    validate(req.body, jsonSchemas.resourceRequestSchema)
        .then((validatedData) => {
            console.log(validatedData);
            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();

                let attr, resource;

                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    // validate that user is requester
                    const requesterInfo = await client.query(
                        querylib.qRequesterInfo,
                        [validatedData.userid]
                    );

                    // validate and get city *******
                    const requesterCity = await client.query(
                        querylib.qGetCity,
                        [validatedData.city]
                    );

                    // if no result requester does not exist
                    if (requesterInfo.rowCount == 0) {
                        await client.query('ROLLBACK');
                        res.status(400)
                            .json({
                                msg: `User with id: '${validatedData.userid}' is not a requestor.`,
                            })
                            .end();
                        return;
                    }
                    //if no result city does not exist
                    if (requesterCity.rowCount == 0) {
                        await client.query('ROLLBACK');
                        res.status(400)
                            .json({
                                msg: `User with id: '${validatedData.city}' is not a city.`,
                            })
                            .end();
                        return;
                    }

                    // create request
                    const requestId = await client.query(
                        querylib.qInsertRequest,
                        [validatedData.userid]
                    );

                    let mset = new Set();

                    // insert each resource
                    for (resource of validatedData.requested_resources) {
                        console.log(resource);

                        // validate qty of attrbs
                        const attrbsDefinitions = await client.query(
                            querylib.qGetAttributeFields,
                            [resource.resource_type]
                        );

                        let attrbsSet = new Set();

                        attrbsDefinitions.rows.forEach((value) => {
                            attrbsSet.add(
                                value.resource_type_field_name.toLowerCase()
                            );
                        });

                        // used for if the resource can be bought or rented
                        let hasTransactionType = attrbsSet.has(
                            'transaction type'
                        );
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
                                attr.attr_name.toLowerCase() ==
                                    'transaction type' &&
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
                            res.status(400)
                                .json({
                                    error: `Not all attributes specified. Missing: '${Array.from(
                                        attrbsSet
                                    ).join(',')}'`,
                                })
                                .end();
                            return;
                        }

                        await client.query(querylib.qInsertRequestedResource, [
                            requestId.rows[0].request_id,
                            resourceId.rows[0].resource_id,
                        ]);
                    }

                    await client.query('COMMIT');

                    let msg = {
                        msg: 'Request created succesfully.',
                        request_id: requestId.rows[0].request_id,
                    };

                    res.status(201)
                        .json(msg)
                        .end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.');

                    let emsg = e.toString();
                    let status = 503;

                    if (e.code == '23502') {
                        console.log('not_null_violation');
                        if (e.column == 'resource_type_field_value') {
                            emsg = `Invalid resource attribute value:'${attr.attr_value}' for attributeField:'${attr.attr_name}' for resource:'${resource.resource_type}'`;
                        } else if (e.column == 'resource_type_field_name') {
                            emsg = `Invalid resource attribute:'${attr.attr_name}' for resource:${resource.resource_type}`;
                        }
                        status = 400;
                    }
                    console.log(e);
                    await client.query('ROLLBACK');

                    res.status(status)
                        .json({ error: emsg })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            console.log('Json Validation Error', error);

            res.status(400)
                .json(error)
                .end();
        });
};

exports.postReserveResource = (req, res, next) => {
    validate(req.body, jsonSchemas.resourceReserveSchema)
        .then((validatedData) => {
            console.log(validatedData);
            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();

                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    // validate that user is requester and get city
                    const requesterInfo = await client.query(
                        querylib.qRequesterInfo,
                        [validatedData.userid]
                    );

                    // if no result requester does not exist
                    if (requesterInfo.rows.length == 0) {
                        await client.query('ROLLBACK');
                        res.status(400)
                            .json({
                                msg: `User with userid: '${validatedData.userid}' is not a requestor.`,
                            })
                            .end();
                        return;
                    }

                    //if no result city does not exist
                    if (requesterCity.rowCount == 0) {
                        await client.query('ROLLBACK');
                        res.status(400)
                            .json({
                                msg: `User with id: '${validatedData.city}' is not a city.`,
                            })
                            .end();
                        return;
                    }

                    // validate if there are available resources to reserve
                    for (reserve of validatedData.reserves) {
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

                            res.status(400)
                                .json({
                                    msg: `No resource available for reserve with resourceid: ${reserve.resource_id}`,
                                })
                                .end();
                            return;
                        }
                        let remaingQty = available.rows[0].available;

                        if (remaingQty - reserve.quantity < 0) {
                            console.log(`More than remaining. Doing Rollback`);

                            await client.query('ROLLBACK');

                            res.status(400)
                                .json({
                                    msg: `The resource:'${reserve.resource_id}' exists, but the remainint quantity is ${remaingQty} units. Cannot reserve ${reserve.quantity} units.`,
                                })
                                .end();
                            return;
                        }
                    }

                    // create reserve
                    const reserveId = await client.query(
                        querylib.qInsertReserve,
                        [
                            validatedData.userid,
                            validatedData.city,
                            validatedData.latitude,
                            validatedData.longitude,
                        ]
                    );

                    for (reserve of validatedData.reserves) {
                        // insert every resource reserved
                        await client.query(querylib.qInsertReservedResources, [
                            reserveId.rows[0].reserve_id,
                            reserve.resource_id,
                            reserve.quantity,
                        ]);
                    }

                    await client.query('COMMIT');

                    let msg = {
                        msg: 'Resource(s) reserved succesfully.',
                        reserve_id: reserveId.rows[0].reserve_id,
                    };

                    res.status(201)
                        .json(msg)
                        .end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.');

                    let emsg = e.toString();
                    let status = 503;

                    if (e.code == '23502') {
                        console.log('not_null_violation');
                        if (e.column == 'resource_type_field_value') {
                            emsg = `Invalid resource attribute value:'${attr.attr_value}' for attributeField:'${attr.attr_name}' for resource:'${resource.resource_type}'`;
                        } else if (e.column == 'resource_type_field_name') {
                            emsg = `Invalid resource attribute:'${attr.attr_name}' for resource:${resource.resource_type}`;
                        }
                        status = 400;
                    }
                    console.log(e);
                    await client.query('ROLLBACK');

                    res.status(status)
                        .json({ error: emsg })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            console.log('Json Validation Error', error);

            res.status(400)
                .json(error)
                .end();
        });
};

exports.postBuyResource = (req, res, next) => {
    validate(req.body, jsonSchemas.resourceOrderSchema)
        .then((validatedData) => {
            console.log(validatedData);
            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();

                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    // validate that user is requester and get city
                    const requesterInfo = await client.query(
                        querylib.qRequesterInfo,
                        [validatedData.userid]
                    );

                    // if no result requester does not exist
                    if (requesterInfo.rows.length == 0) {
                        await client.query('ROLLBACK');
                        res.status(400)
                            .json({
                                msg: `User with userid: '${validatedData.userid}' is not a requestor.`,
                            })
                            .end();
                        return;
                    }

                    // validate if there are available resources to reserve
                    for (purchase of validatedData.purchases) {
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

                            res.status(400)
                                .json({
                                    msg: `No resource available for purchase with resourceid: ${purchase.resource_id}`,
                                })
                                .end();
                            return;
                        }

                        let remaingQty = available.rows[0].available;

                        if (remaingQty - purchase.quantity < 0) {
                            console.log(`More than remaining. Doing Rollback`);

                            await client.query('ROLLBACK');

                            res.status(400)
                                .json({
                                    msg: `The resource:'${purchase.resource_id}' exists, but the remainint quantity is ${remaingQty} units. Cannot purchase ${purchase.quantity} units.`,
                                })
                                .end();
                            return;
                        }
                    }

                    // create purchase
                    const purchaseId = await client.query(
                        querylib.qInsertOrder,
                        [
                            validatedData.userid,
                            validatedData.city,
                            validatedData.latitude,
                            validatedData.longitude,
                            validatedData.payment_method,
                        ]
                    );

                    for (purchase of validatedData.purchases) {
                        // insert every resource purchased

                        await client.query(querylib.qInsertPurchasedResources, [
                            purchaseId.rows[0].order_id,
                            purchase.resource_id,
                            Number(purchase.quantity),
                        ]);
                    }

                    await client.query('COMMIT');

                    let msg = {
                        msg: 'Resource(s) purchased succesfully.',
                        purchase_id: purchaseId.rows[0].order_id,
                    };

                    res.status(201)
                        .json(msg)
                        .end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.');

                    let emsg = e.toString();
                    let status = 503;

                    if (e.code == '23502') {
                        console.log('not_null_violation');
                        if (e.column == 'resource_type_field_value') {
                            emsg = `Invalid resource attribute value:'${attr.attr_value}' for attributeField:'${attr.attr_name}' for resource:'${resource.resource_type}'`;
                        } else if (e.column == 'resource_type_field_name') {
                            emsg = `Invalid resource attribute:'${attr.attr_name}' for resource:${resource.resource_type}`;
                        }
                        status = 400;
                    }
                    console.log(e);
                    await client.query('ROLLBACK');

                    res.status(status)
                        .json({ error: emsg })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            console.log('Json Validation Error', error);

            res.status(400)
                .json(error)
                .end();
        });
};
