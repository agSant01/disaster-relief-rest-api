module.exports = {
    //login
    qLogin = `select * from users_table where username = '$1' and user_password = crypt('$2', gen_salt('bf'))`,
};
