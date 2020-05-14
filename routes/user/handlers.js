const db = require('../../database');
const querylib = require('./queries');
const { validate } = require('indicative/validator');
const postSchemas = require('./post_schemas');

exports.getRoles = (req, res, next) => {
    const query = {
        text: querylib.qRoles,
    };
    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json({ error: qerr.stack }).end();
        } else {
            const msg = {
                roles: qres.rows,
                count: qres.rowCount,
            };
            res.json(msg).end();
        }
    });
};

exports.getAllUsers = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    let query;

    console.log(is_debug);

    if (is_debug) {
        query = querylib.qAllUsersDebug;
    } else {
        query = querylib.qAllUsers;
    }

    console.log(query);

    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json({ error: qerr.stack }).end();
        } else {
            const msg = {
                users: qres.rows,
                count: qres.rowCount,
            };
            res.json(msg).end();
        }
    });
};

exports.getAdministrators = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    let query;

    console.log(is_debug);

    if (is_debug) {
        query = querylib.qGetAdministratorsDebug;
    } else {
        query = querylib.qGetAdministrators;
    }

    console.log(query);

    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json({ error: qerr.stack }).end();
        } else {
            const msg = {
                count: qres.rowCount,
                administrators: qres.rows,
            };
            res.json(msg).end();
        }
    });
};

const userRoles = {
    administrator: 1,
    sys_manager: 2,
    supplier: 3,
    requester: 4,
};

const roleNames = Object.keys(userRoles);

exports.registerUser = (req, res, next) => {
    const roleToAdd = req.params.roleType.toLowerCase();

    // validate role to add
    if (!roleNames.includes(roleToAdd)) {
        res.status(401).json({
            error: `Invalid role:'${roleToAdd}' for registering user.`,
            invalid_param: roleToAdd,
        });
        return;
    }

    // Validate that the structure of the json follows the register User Schema
    validate(req.body, postSchemas.registerUserSchema)
        .then((validatedJson) => {
            console.log(validatedJson);

            let insertUserQuery = {
                text: querylib.qRegister,
                values: [
                    validatedJson.username,
                    validatedJson.password,
                    validatedJson.first_name,
                    validatedJson.last_name,
                    validatedJson.dob,
                    validatedJson.address.city,
                    validatedJson.address.zip_code,
                    validatedJson.address.country,
                    validatedJson.gender,
                    validatedJson.email,
                    validatedJson.phone_number,
                    // get id from roles json
                    userRoles[roleToAdd],
                    validatedJson.address.street1,
                    validatedJson.address.street2,
                ],
            };

            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();
                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    // insert user and return user id
                    const userIdResult = await client.query(insertUserQuery);

                    console.log(
                        `inserted userid: ${userIdResult.rows[0].userid}`
                    );

                    let userid = userIdResult.rows[0].userid;

                    const getuserInfoQuery = {
                        text: querylib.qUser,
                        values: [userid, true],
                    };

                    const userInfoResult = await client.query(getuserInfoQuery);

                    await client.query('COMMIT');

                    let msg = {
                        msg: 'Created User.',
                        user: userInfoResult.rows,
                    };

                    console.log(msg);

                    res.json(msg).end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.');
                    console.log(e);
                    await client.query('ROLLBACK');
                    res.status(503)
                        .json({ error: e.toString() })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            console.log('Json Validation Error', error);

            res.status(400)
                .json(error)
                .end();
        });
};

exports.getUser = (req, res, next) => {
    let user_id = req.params.id;
    let is_not_enabled = req.query.enabled == 'false';
    let is_debug = req.query.debug == 'true';

    if (isNaN(Number(user_id))) {
        res.status(401).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    let query_text;

    // get debug query or prod
    if (is_debug) {
        query_text = querylib.qUserDebug;
    } else {
        query_text = querylib.qUser;
    }

    // build prepared statement
    const query = {
        text: query_text,
        values: [user_id, !is_not_enabled],
    };

    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json({ error: qerr.stack }).end();
        } else {
            // build return mesage
            const msg = {
                user: qres.rows,
            };
            res.json(msg).end();
        }
    });
};

exports.getRequests = (req, res, next) => {
    let user_id = req.params.id;

    if (isNaN(Number(user_id))) {
        res.status(401).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    const query = {
        text: querylib.qGetRequestsByUserId,
        values: [user_id],
    };

    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json({ error: qerr.stack }).end();
        } else {
            const msg = {
                requestor_id: user_id,
                count: qres.rowCount,
                requests: qres.rows,
            };

            res.json(msg).end();
        }
    });
};

exports.getReserves = (req, res, next) => {
    let user_id = req.params.id;

    if (isNaN(Number(user_id))) {
        res.status(401).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    const query = {
        text: querylib.qGetReservesByUserId,
        values: [user_id],
    };

    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json({ error: qerr.stack }).end();
        } else {
            const msg = {
                reservations: qres.rows,
                count: qres.rowCount,
            };

            res.json(msg).end();
        }
    });
};

exports.getUserOrders = (req, res, next) => {
    const user_id = req.params.id;

    if (isNaN(Number(user_id))) {
        res.status(401).json({
            error: "Invalid param for 'user id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    const purchase_id = req.params.purchaseid;

    let query;

    if (purchase_id) {
        if (isNaN(Number(purchase_id))) {
            res.status(401).json({
                error:
                    "Invalid param for 'purchase id'. Must be 'Integer' type.",
                invalid_param: req.params.id,
            });
            return;
        }

        query = {
            text: querylib.qGetPurchasesByUserIdAndOrderId,
            values: [user_id, purchase_id],
        };
    } else {
        query = {
            text: querylib.qGetPurchasesByUserId,
            values: [user_id],
        };
    }

    console.log(query);

    // callback
    db.query(query, (qerr, qres) => {
        console.log(qerr, qres);

        if (qerr) {
            res.status(503)
                .json({ error: qerr.stack })
                .end();
        } else {
            let msg;

            if (purchase_id) {
                msg = {
                    purchase: qres.rows,
                };
            } else {
                msg = {
                    count: qres.rowCount,
                    purchases: qres.rows,
                };
            }
            msg.user_id = user_id;

            res.json(msg).end();
        }
    });
};
