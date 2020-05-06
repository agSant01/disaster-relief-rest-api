const db = require('../../database');
const querylib = require('./queries');

exports.getTypes = (req, res, next) => {
    // callback
    db.query(querylib.qAllTypes, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json(err)
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
                .json(err)
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
                .json(err)
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
                .json(err)
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
                .json(err)
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
                .json(err)
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
            text: querylib.qGetAllRequestsById,
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
                .json(err)
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
                .json(err)
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
    /**
     * Validate that the resource contains all the required fields
     * - quantity
     * - location
     *   - latitude
     *   - longitude
     * - Delivery method(s)
     * - city to be located in
     * - resource type
     * - resource attributes
     * - requestor id
     */

    let response = {
        status: 200,
    };

    res.status(200)
        .json(response)
        .end();
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
