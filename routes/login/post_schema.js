const { validations } = require('indicative/validator');

module.exports = {
    loginSchema: {
        username: 'required|string',
        password: 'required|string',
    },
};
