const db = require('../../database');
const querylib = require('./queries');

exports.loginUser = async (username, password) => {
    const query = {
        text: querylib.qLogin,
        values: [username, password],
    };

    console.log(query.values);

    const result = await db.query(query);
    console.log('query result', result);
    const msg = {
        logged_in: result.rows[0],
    };

    return msg;
};
