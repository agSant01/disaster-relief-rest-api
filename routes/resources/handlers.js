exports.getTypes = (req, res, next) => {
    let msg = {
        resources: []
    };
    res.json(msg).end();
};

/*
Returns the attributes associated with a particular resource type.
*/
exports.getResourceTypeAttributes = (req, res, next) => {
    let resourceType = req.params.type;

    let response = {
        resource_type: 'Medications',
        attributes: {
            'Medication Type': ['Pills', 'Liquid']
        }
    };

    res.json(response).end();
};

exports.getAvailable = (req, res, next) => {
    let msg = {
        resourcesAvailable: []
    };
    res.json(msg).end();
};

exports.getRequests = (req, res, next) => {
    let msg = {
        resourcesRequested: []
    };
    res.json(msg).end();
};

exports.putUpdate = (req, res, next) => {
    let msg = {
        request: {
            info: {},
            status: ''
        }
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
        status: 200
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
        status: 200
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
        status: 200
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
            order_id: Math.ceil(100000 * Math.random())
        }
    };

    res.status(200)
        .json(response)
        .end();
};
