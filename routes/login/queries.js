module.exports = {
    //login
    qLogin: `
    Select
        userid,
        first_name,
        last_name,
        city.city_name,
        country.country_name,
        users_table.email,
        users_table.phone_number,
        users_table.street1,
        users_table.street2,
        roles.role_name
    from users_table
    natural join city
    natural join country
    natural join roles
    where username = $1::text and 
    user_password = crypt($2::text, user_password)
    and is_enabled = true`,
};
