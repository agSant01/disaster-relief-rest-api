const { validate } = require('indicative/validator');
const postSchemas = require('./post_schemas');
const usersDao = require('./dao');

exports.getRoles = (req, res, next) => {
    usersDao
        .getAllRoles()
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((err) => {
            console.log(err.stack);
            res.status(503).json({ error: err.stack });
        });
};

exports.getAllUsers = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    usersDao
        .getAllUsers(is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((err) => {
            console.log(err.stack);
            res.status(503).json({ error: err.stack });
        });
};

exports.getAdministrators = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    usersDao
        .getAllAdministrators(is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((err) => {
            console.log(err.stack);
            res.status(503).json({ error: err.stack });
        });
};

exports.registerUser = (req, res, next) => {
    const roleToAdd = req.params.roleType.toLowerCase();

    // validate role to add
    if (!usersDao.isValidUserType(roleToAdd)) {
        res.status(400).json({
            error: `Invalid role:'${roleToAdd}' for registering user.`,
            invalid_param: roleToAdd,
        });
        return;
    }

    // Validate that the structure of the json follows the register User Schema
    validate(req.body, postSchemas.registerUserSchema)
        .then((validatedJson) => {
            console.log(validatedJson);

            usersDao
                .insertUser(
                    validatedJson.username,
                    validatedJson.password,
                    validatedJson.first_name,
                    validatedJson.last_name,
                    validatedJson.dob,
                    validatedJson.address.city,
                    validatedJson.address.zip_code,
                    validatedJson.address.country,
                    validatedJson.gender.toLowerCase(),
                    validatedJson.email,
                    validatedJson.phone_number,
                    roleToAdd,
                    validatedJson.address.street1,
                    validatedJson.address.street2
                )
                .then((result) => {
                    console.log('result', result);
                    res.json(result).end();
                })
                .catch((error) => {
                    console.log('error', error);
                    console.log('error', error.constraint);
                    console.log('error', error.code);

                    if (
                        error.code == '23505' &&
                        error.constraint == 'users_table_username_key'
                    ) {
                        res.status(400)
                            .json({
                                error: `Username '${validatedJson.username}' already exists.`,
                            })
                            .end();
                    } else {
                        res.status(503)
                            .json({ error: error.stack })
                            .end();
                    }
                });
        })
        .catch((error) => {
            console.log('Json Validation Error', error);

            res.status(400)
                .json(error)
                .end();
        });
};

exports.getUserById = (req, res, next) => {
    let user_id = req.params.id;
    let is_not_enabled = req.query.enabled == 'false';
    let is_debug = req.query.debug == 'true';

    if (isNaN(Number(user_id))) {
        res.status(400).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    usersDao
        .getUserById(user_id, is_debug, is_not_enabled)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);
            res.status(503)
                .json(error)
                .end();
        });
};

exports.getRequestsByUser = (req, res, next) => {
    let user_id = req.params.id;

    if (isNaN(Number(user_id))) {
        res.status(400).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    usersDao
        .getAllRequestsByUserId(user_id)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);
            res.status(503)
                .json(error)
                .end();
        });
};

exports.getReservesByUser = (req, res, next) => {
    let user_id = req.params.id;

    if (isNaN(Number(user_id))) {
        res.status(400).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    usersDao
        .getReservesByUserId(user_id)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);
            res.status(503)
                .json(error)
                .end();
        });
};

exports.getUserOrders = (req, res, next) => {
    const user_id = req.params.id;
    const purchase_id = req.params.purchaseid;

    if (isNaN(Number(user_id))) {
        res.status(400).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    let queryPromise;

    if (purchase_id) {
        if (isNaN(Number(purchase_id))) {
            res.status(400).json({
                error:
                    "Invalid param for 'purchase id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }
        queryPromise = usersDao.getUserPurchaseByPurchaseId(
            user_id,
            purchase_id
        );
    } else {
        queryPromise = usersDao.getAllPurchasesByUserId(user_id);
    }

    queryPromise
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log(error);
            res.status(503)
                .json(error)
                .end();
        });
};

exports.toggle = (req, res, next) => {
    let username = req.body.username;
    let enable = req.body.enable;

    if (username) {
        if (isNaN(Boolean(enable))) {
            res.status(400).json({
                error: "Invalid param for 'enable'. Must be 'Boolean' type.",
                invalid_param: req.body.enable,
            });
            return;
        }

        usersDao
            .enableOrDisableUserByUsername(username, enable)
            .then((result) => {
                console.log('result', result);
                res.status(200)
                    .json(result)
                    .end();
            })
            .catch((err) => {
                console.log('error', err);
                res.status(503)
                    .json({ error: err })
                    .end();
            });
    } else {
        res.status(400).json({
            error: "Invalid param for 'username'",
            invalid_param: req.body.username,
        });
        return;
    }
};
