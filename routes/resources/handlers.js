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
            resource_types: result.rows,
            count: result.rowCount,
        };

        res.json(msg).end();
    });
};

exports.getAllResources = (req, res, next) => {
    let msg = {
        resources: [],
    };
    res.json(msg).end();
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
    const provider_id = req.query.providerID;
    const keyword = req.query.keyword;

    let query = querylib.qGetAllResourcesAvailable;

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
            resources_available: result.rows,
            count: result.rowCount,
        };

        res.json(msg).end();
    });
};

exports.getRequests = (req, res, next) => {
    let msg = {
        resourcesRequested: [],
    };
    res.json(msg).end();
};

exports.getPurchase = (req, res, next) => {
    const id = req.params.ID;
    var msg;

    if(id){
        msg = {
            id:id,
            purchase: [],
        };
        res.json(msg).end();
    }
    else{
        msg = {
            purchase: [],
        };
        res.json(msg).end();
    }
    
    
};

exports.getReserves = (req, res, next) => {
    const id = req.params.ID;
    var msg;

    if(id){
        msg = {
            id:id,
            purchase: [],
        };
        res.json(msg).end();
    }
    else{
        msg = {
            purchase: [],
        };
        res.json(msg).end();
    }
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
