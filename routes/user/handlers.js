const db = require('../../database');
const querylib = require('./queries');

exports.getRoles = (req, res, next) => {
    const query = {
        text: querylib.qRoles,
    };
    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json(qerr.stack).end();
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
            res.json(qerr.stack).end();
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
            res.json(qerr.stack).end();
        } else {
            const msg = {
                count: qres.rowCount,
                administrators: qres.rows,
            };
            res.json(msg).end();
        }
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
            res.json(qerr.stack).end();
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
            res.json(qerr.stack).end();
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
            res.json(qerr.stack).end();
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
    const is_debug = req.query.debug == 'true';

    let query_text;

    console.log(is_debug);

    if (is_debug) {
        query_text = querylib.qAllUsersDebug;
    } else {
        query_text = querylib.qAllUsers;
    }

    console.log(query_text);
};
