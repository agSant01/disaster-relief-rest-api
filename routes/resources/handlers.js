const db = require('../../database');
const querylib = require('./queries');
const { validate } = require('indicative/validator');
const jsonSchemas = require('./post_schemas');

exports.getTypes = (req, res, next) => {
    // callback
    db.query(querylib.qAllTypes, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.stack })
                .end();
            return;
        }

        const msg = {
            count: result.rowCount,
            resource_types: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getAllResources = (req, res, next) => {
    let id = req.params.ID;

    let query;

    if (id) {
        if (isNaN(Number(id))) {
            res.status(401).json({
                error:
                    "Invalid param for 'resource id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }
        console.log(id);
        query = {
            text: querylib.qGetResourceById,
            values: [id],
        };
    } else {
        query = {
            text: querylib.qGetResourceAllResources,
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
        res.status(401).json({
            error:
                "Invalid param for 'resource type id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    let query = {
        text: querylib.qTypeAttribute,
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

exports.getResourcesAvailable = (req, res, next) => {
    const provider_id = req.params.provider;

    let query = querylib.qGetAllResourcesAvailable;

    if (provider_id) {
        if (isNaN(Number(provider_id))) {
            res.status(401).json({
                error:
                    "Invalid param for 'supplier id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }

        query = {
            text: querylib.qGetAllResourcesAvailableByProvider,
            values: [provider_id],
        };
    } else {
        const keyword = req.query.keyword;

        if (keyword) {
            console.log(keyword);

            query = {
                text: querylib.qGetAllResourcesAvailableByKeyword,
                values: [`%${keyword.toLowerCase().replace(/\s/g, '')}%`],
            };
        }
    }

    console.log(query);

    // callback
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
            resources_available: result.rows,
        };

        if (provider_id && result.rowCount > 0) {
            msg.supplier_id = Number(provider_id);
        }

        res.json(msg).end();
    });
};

exports.getAllReservedResource = (req, res, next) => {
    const resid = req.params.reserveid;

    let query = querylib.getAllReservedResources;

    if (resid) {
        if (isNaN(Number(resid))) {
            res.status(401).json({
                error:
                    "Invalid param for 'reserve id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }

        query = {
            text: querylib.getAllReservedResourcesById,
            values: [resid],
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

        let msg;

        if (resid) {
            msg = {
                reserve: result.rows,
            };
        } else {
            msg = {
                count: result.rowCount,
                reserves: result.rows,
            };
        }

        res.json(msg).end();
    });
};

exports.getRequests = (req, res, next) => {
    const reqid = req.params.id;

    let query = querylib.qGetAllRequests;

    if (reqid) {
        if (isNaN(Number(reqid))) {
            res.status(401).json({
                error:
                    "Invalid param for 'request id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }

        query = {
            text: querylib.qGetRequestsById,
            values: [reqid],
        };
    } else {
        const keyword = req.query.keyword;

        if (keyword) {
            console.log(keyword);

            query = {
                text: querylib.qGetAllRequestsByKeyword,
                values: [`%${keyword.toLowerCase().replace(/\s/g, '')}%`],
            };
        }
    }

    console.log(query);

    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.stack })
                .end();
            return;
        }

        let msg;

        if (reqid) {
            msg = {
                request: result.rows,
            };
        } else {
            msg = {
                count: result.rowCount,
                requests: result.rows,
            };
        }

        res.json(msg).end();
    });
};

exports.getPurchase = (req, res, next) => {
    const id = req.params.ID;

    var query;

    if (id) {
        if (isNaN(Number(id))) {
            res.status(401).json({
                error:
                    "Invalid param for 'purchase id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }
        query = {
            text: querylib.qPurchasesByID,
            values: [id],
        };
    } else {
        query = {
            text: querylib.qPurchases,
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

        let msg;

        if (id) {
            msg = {
                resource: result.rows,
            };
        } else {
            msg = {
                count: result.rowCount,
                resource: result.rows,
            };
        }

        res.json(msg).end();
    });
};

exports.putUpdate = (req, res, next) => {
    let msg = {
        request: {
            info: {},
            status: '',
        },
    };
    res.json(msg).end();
};

exports.postResource = (req, res, next) => {
    /**
     * Validate that the resource contains all the required fields
     * - quantity
     * - price per unit
     * - unit of measurement
     * - location
     *   - latitude
     *   - longitude
     * - Available delivery methods
     * - city to be located in
     * - resource type
     * - resource attributes
     * - supplier id
     * - is for sale
     */

    let response = {
        status: 200,
    };

    res.status(200)
        .json(response)
        .end();
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

                    // validate that user is requester and get city
                    const requesterInfo = await client.query(
                        querylib.qRequesterInfo,
                        [validatedData.userid]
                    );

                    // if no result requester does not exist
                    if (requesterInfo.rowCount == 0) {
                        await client.query('ROLLBACK');
                        res.status(200)
                            .json({
                                error: `Requestor does not exists for userid: ${validatedData.userid}`,
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

                        console.log(attrbsSet);

                        if (attrbsSet.size != resource.attributes.length) {
                            await client.query('ROLLBACK');
                            res.status(400)
                                .json({
                                    error: `Attribute amount does not match to required for resource: '${resource.resource_type}'`,
                                })
                                .end();
                            return;
                        }

                        const insertResource = {
                            text: querylib.qInsertResource,
                            values: [
                                resource.quantity,
                                resource.latitude,
                                resource.longitude,
                                resource.resource_type,
                                requesterInfo.rows[0].cityid,
                            ],
                        };

                        const resourceId = await client.query(insertResource);

                        // insert each attribute
                        for (attr of resource.attributes) {
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

                    res.json(msg).end();
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
    /**
     * Validate that the resource contains all the required fields
     * - quantity
     * - location
     *   - latitude
     *   - longitude
     * - Delivery method
     * - city to be located in
     * - resource id
     * - consumer id
     */

    let response = {
        status: 200,
    };

    res.status(200)
        .json(response)
        .end();
};

exports.postBuyResource = (req, res, next) => {
    /**
     * Validate that the post contains all the required fields
     * - quantity
     * - location
     *   - latitude
     *   - longitude
     * - Delivery method
     * - city to be located in
     * - resource id
     * - consumer id
     */

    let response = {
        msg: 'Order successfully processed.',
        order: {
            order_id: Math.ceil(100000 * Math.random()),
        },
    };

    res.status(200)
        .json(response)
        .end();
};
