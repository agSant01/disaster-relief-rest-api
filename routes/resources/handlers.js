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
    // callback
    db.query(querylib.qGetResourceAllResources, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json(err)
                .end();
            return;
        }

        const msg = {
            count: result.rowCount,
            resources: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getResourceById = (req, res, next) => {
    const resid = req.params.id;

    if (isNaN(Number(resid))) {
        res.status(401).json({
            error: "Invalid param for 'resource id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    const query = {
        text: querylib.qGetResourceById,
        values: [resid],
    };

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

exports.getResourcesAvailable = (req, res, next) => {
    const provider_id = req.params.provider;
    const keyword = req.query.keyword;

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
    db.query(querylib.getAllReservedResources, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json(err)
                .end();
            return;
        }

        let msg = {
            count: result.rowCount,
            reserves: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getReservedResourceById = (req, res, next) => {
    res.json('hi').end();
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
