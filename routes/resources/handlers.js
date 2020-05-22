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

exports.getResources = (req, res, next) => {
    const id = req.params.ID;
    const is_debug = req.query.debug == 'true';

    let queryPromise;
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

        queryPromise = ResourcesDao.getResourceById(id, is_debug);
    } else {
        queryPromise = ResourcesDao.getAllResources(is_debug);
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
            res.status(503)
                .json({ error: error.stack })
                .end();
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
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getResourceAttributesByTypeName = (req, res, next) => {
    let resourceTypeName = req.params.typeName;
    ResourcesDao.getResourceAttributeByTypeName(resourceTypeName)
        .then((result) => {
            console.log(result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
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

            ResourcesDao.insertAvailableResource(
                validatedData.userid,
                validatedData.city,
                validatedData.latitude,
                validatedData.longitude,
                validatedData.quantity,
                validatedData.price,
                validatedData.is_for_sale,
                validatedData.resource_type,
                validatedData.attributes,
                validatedData.delivery_option
            )
                .then((result) => {
                    console.log(result);

                    res.status(200)
                        .json(result)
                        .end();
                })
                .catch((error) => {
                    console.log(error);

                    if (error.response_msg) {
                        res.status(error.status)
                            .json({ error: error.response_msg })
                            .end();
                    } else {
                        res.status(503)
                            .json({ error: error.stack })
                            .end();
                    }
                });
        })
        .catch((error) => {
            console.log('JSON Validation error');
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

            ResourcesDao.insertResourceRequest(
                validatedData.userid,
                validatedData.city,
                validatedData.requested_resources
            )
                .then((result) => {
                    console.log(result);

                    res.status(200)
                        .json(result)
                        .end();
                })
                .catch((error) => {
                    console.log('error', error);

                    if (error.response_msg) {
                        res.status(error.status)
                            .json(error.response_msg)
                            .end();
                    } else {
                        res.status(503)
                            .json({ error: error.stack })
                            .end();
                    }
                });
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
