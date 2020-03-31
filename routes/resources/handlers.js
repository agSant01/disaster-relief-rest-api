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
