const db = require('../../database');
const querylib = require('./queries');
exports.postLogin = (req, res, next) => {
    /*
      Validate that the structure of the post has the required fields:
      - Username
      - Password
    */

    // Logic to authenticate the user

    /* 
    The server will return an 200-OK with an User Object
    */
    const query = {
        text: querylib.qLogin,
        values: [req.body.username, req.body.password],
    };
    console.log(query.values);
    // callback
    db.query(query, (qerr, qres) => {
        if (qerr) {
            res.status(503)
                .json(qerr.stack)
                .end();
        } else {
            const msg = {
                logged_in: qres.rows[0],
            };
            res.json(msg).end();
        }
    });
};
