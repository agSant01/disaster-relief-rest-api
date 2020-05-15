const { validations } = require('indicative/validator');

module.exports = {
    organizationRegister: {
        userid: 'required|number',
        organization_name: 'required|string',
        address: 'required|object',
        'address.street1': [validations.required(), validations.string()],
        'address.street2': 'string',
        'address.city': 'required|string',
        'address.zip_code': [
            validations.regex(new RegExp('^d$')),
            validations.required(),
            validations.string(),
        ],
        'address.country': 'required|string',
        phone_number: 'required|string',
        email: 'required|email',
    },
    organizationAddRepresentatives: {
        representative_id: 'required|number',
        adminid: 'required|number',
    },
};
