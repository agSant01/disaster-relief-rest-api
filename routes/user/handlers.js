const db = require('../../database');
const querylib = require('./queries');

exports.getRoles = (req, res, next) => {
    const query = {
        text: querylib.qRoles,
      }
      // callback
      db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json(qerr.stack).end();
        } else {
            res.json(qres.rows).end();
        }
      })
};

exports.getAllUsers = (req, res, next) => {
    const query = {
        text: querylib.qAllUsers,
      }
      // callback
      db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json(qerr.stack).end();
        } else {
            res.json(qres.rows).end();
        }
      })
};

exports.getUser = (req, res, next) => {
    let user_id = req.params.id;

    const query = {
        text: querylib.qUser,
        values: [user_id],
      }
      // callback
      db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json(qerr.stack).end();
        } else {
            res.json(qres.rows[0]).end();
        }
      })
};
exports.getRequests = (req, res, next) => {
    let user_id = req.params.id;

    const query = {
        text: querylib.qRequestsFromUser,
        values: [user_id],
      }
      // callback
      db.query(query, (qerr, qres) => {
        if (qerr) {
            res.json(qerr.stack).end();
        } else {
            res.json(qres.rows[0]).end();
        }
      })
};
