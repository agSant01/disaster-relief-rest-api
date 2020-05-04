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
    values: [req.body.username,req.body.password],
  }
  console.log(query.values);
  // callback
  db.query(query, (qerr, qres) => {
    if (qerr) {
        res.json(qerr.stack).end();
    } else {
        res.json(qres.rows[0]).end();
    }
  })
};
