module.exports = {
    //login
    qLogin: `select userid, username from users_table where username = $1::text  and user_password = crypt($2::text, user_password)`,
};
