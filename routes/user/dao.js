const db = require('../../database');
const querylib = require('./queries');

exports.getAllRoles = async () => {
    const query = {
        text: querylib.qRoles,
    };

    let result = await db.query(query);

    const msg = {
        roles: result.rows,
        count: result.rowCount,
    };

    console.log('boo');

    return msg;
};

exports.getAllUsers = async (is_debug) => {
    let query;

    console.log(is_debug);

    if (is_debug) {
        query = querylib.qAllUsersDebug;
    } else {
        query = querylib.qAllUsers;
    }

    console.log(query);

    // callback
    let result = await db.query(query);

    const msg = {
        users: result.rows,
        count: result.rowCount,
    };

    return msg;
};

exports.getAllAdministrators = async (is_debug) => {
    let query;

    console.log(is_debug);

    if (is_debug) {
        query = querylib.qGetAdministratorsDebug;
    } else {
        query = querylib.qGetAdministrators;
    }

    console.log(query);

    // callback
    let result = await db.query(query);

    const msg = {
        count: result.rowCount,
        administrators: result.rows,
    };

    return msg;
};

const userRoles = {
    administrator: 1,
    sys_manager: 2,
    supplier: 3,
    requester: 4,
};

const roleNames = Object.keys(userRoles);

exports.isValidUserType = (roleToValidate) =>
    roleNames.includes(roleToValidate.toLowerCase());

exports.insertUser = async (
    username,
    password,
    first_name,
    last_name,
    dob,
    city,
    zip_code,
    country,
    gender,
    email,
    phone_number,
    roleToAdd,
    street1,
    street2
) => {
    let insertUserQuery = {
        text: querylib.qRegister,
        values: [
            username,
            password,
            first_name,
            last_name,
            dob,
            city,
            zip_code,
            country,
            gender.toLowerCase() == 'male' ? 'Male' : 'Female',
            email,
            phone_number,
            // get id from roles json
            userRoles[roleToAdd],
            street1,
            street2,
        ],
    };

    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();
    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        // insert user and return user id
        const userIdResult = await client.query(insertUserQuery);

        console.log(`inserted userid: ${userIdResult.rows[0].userid}`);

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

        return msg;
    } catch (error) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.');
        await client.query('ROLLBACK');

        if (error.code == '23505') {
            if (error.constraint == 'users_table_username_key') {
                error.response_msg = `Username '${username}' already exists.`;
            } else if (error.constraint == 'users_table_username_key') {
                error.response_msg = `User with email '${email}' already exists.`;
            }
            error.status = 400;
        }

        throw error;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};

exports.getUserById = async (user_id, is_debug, is_not_enabled) => {
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

    let result = await db.query(query);

    // build return mesage
    const msg = {
        user: result.rows,
    };

    return msg;
};

exports.getAllRequestsByUserId = async (user_id) => {
    const query = {
        text: querylib.qGetRequestsByUserId,
        values: [user_id],
    };

    const result = await db.query(query);

    const msg = {
        requestor_id: user_id,
        count: result.rowCount,
        requests: result.rows,
    };

    return msg;
};

exports.getReservesByUserId = async (user_id) => {
    const query = {
        text: querylib.qGetReservesByUserId,
        values: [user_id],
    };

    const result = await db.query(query);

    const msg = {
        reservations: result.rows,
        count: result.rowCount,
    };

    return msg;
};

exports.getAllPurchasesByUserId = async (user_id) => {
    query = {
        text: querylib.qGetPurchasesByUserId,
        values: [user_id],
    };

    const result = await db.query(query);

    const msg = {
        count: result.rowCount,
        user_id: user_id,
        purchases: result.rows,
    };

    return msg;
};

exports.getUserPurchaseByPurchaseId = async (user_id, purchase_id) => {
    query = {
        text: querylib.qGetPurchasesByUserIdAndOrderId,
        values: [user_id, purchase_id],
    };

    const result = await db.query(query);

    const msg = {
        user_id: user_id,
        purchase: result.rows,
    };

    return msg;
};

exports.enableOrDisableUserByUsername = async (username, enable) => {
    try {
        const query = {
            text: querylib.qToggle,
            values: [username, enable],
        };

        const result = await db.query(query);

        let msg = {
            status: `User succesfully ${enable ? 'enabled' : 'disabled'}`,
        };

        return msg;
    } catch (error) {
        throw error;
    }
};
