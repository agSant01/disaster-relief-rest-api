const { sanitizations } = require('indicative/sanitizer');
const { validations } = require('indicative/validator');

module.exports = {
    registerUserSchema: {
        username: 'required|alpha_numeric',
        first_name: 'required|string',
        last_name: 'required|string',
        email: 'required|email',
        address: 'required|object',
        'address.street1': 'required|string',
        'address.street2': 'string',
        'address.city': 'required|string',
        'address.zip_code': [
            validations.regex(new RegExp('^d$')),
            validations.required(),
            validations.string(),
        ],
        'address.country': 'required|string',
        gender: [
            validations.required(),
            validations.subset(['Male', 'Female', 'male', 'female']),
        ],
        dob: [validations.dateFormat(['YYYY-MM-DD'])],
        phone_number: [validations.string(), validations.required()],
        password: [validations.min([5]), validations.required()],
    },
};
