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

                    res.status(201)
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

                    res.status(201)
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

            ResourcesDao.insertReservedResource(
                validatedData.userid,
                validatedData.reserves,
                validatedData.city,
                validatedData.latitude,
                validatedData.longitude
            )
                .then((result) => {
                    console.log(result);

                    res.status(201)
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

exports.postBuyResource = (req, res, next) => {
    validate(req.body, jsonSchemas.resourceOrderSchema)
        .then((validatedData) => {
            console.log(validatedData);
            ResourcesDao.insertPurchase(
                validatedData.userid,
                validatedData.city,
                validatedData.purchases,
                validatedData.latitude,
                validatedData.longitude,
                validatedData.payment_method
            )
                .then((result) => {
                    console.log(result);

                    res.status(201)
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
