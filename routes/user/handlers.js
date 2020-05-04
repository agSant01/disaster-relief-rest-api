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
                administrators: qres.rows,
                count: qres.rowCount,
            };
            res.json(msg).end();
        }
    });
};

exports.getUser = (req, res, next) => {
    let user_id = req.params.id;
    let is_not_enabled = req.query.enabled == 'false';
    let is_debug = req.query.debug == 'true';

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
                count: qres.rowCount,
            };
            res.json(msg).end();
        }
    });
};
exports.getRequests = (req, res, next) => {
    let user_id = req.params.id;

    const query = {
        text: querylib.qRequestsFromUser,
        values: [user_id],
    };

    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json(qerr.stack).end();
        } else {
            const msg = {
                requests: qres.rows,
                count: qres.rowCount,
            };

            res.json(msg).end();
        }
    });
};
