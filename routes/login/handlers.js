const LoginDao = require('./dao');
const { validate } = require('indicative/validator');
const postSchemas = require('./post_schema');

exports.postLogin = (req, res, next) => {
    /*
      Validate that the structure of the post has the required fields:
      - Username
      - Password
    */
    // Logic to authenticate the user
    validate(req.body, postSchemas.loginSchema)
        .then((validatedJson) => {
            console.log('json', validatedJson);

            LoginDao.loginUser(validatedJson.username, validatedJson.password)
                .then((result) => {
                    console.log('result', result);
                    res.status(200)
                        .json(result)
                        .end();
                })
                .catch((error) => {
                    console.log('error', error);
                    res.status(503).json({ error: error.stack });
                });
        })
        .catch((error) => {
            console.log('Json Validation Error', error);

            res.status(400)
                .json(error)
                .end();
        });
};
