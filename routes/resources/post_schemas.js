const { validations } = require('indicative/validator');

module.exports = {
    resourceRequestSchema: {
        userid: 'required|number',
        requested_resources: [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'requested_resources.*.resource_type': 'required|string',
        'requested_resources.*.quantity': 'required|number',
        'requested_resources.*.latitude': 'required|float',
        'requested_resources.*.longitude': 'required|float',
        'requested_resources.*.attributes': [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'requested_resources.*.attributes.*.attr_name': 'required|string',
        'requested_resources.*.attributes.*.attr_value': 'required|string',
    },
};
