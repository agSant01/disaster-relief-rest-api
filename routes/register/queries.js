module.exports = {
    //register
    qRegister = `INSERT INTO users_table 
    (
        username,
        user_password,
        first_name,
        last_name, 
        date_of_birth,
        street1,
        city,
        zip_code,
        country_id, 
        gender,
        email,
        phone_number,
        is_enabled,
        role_id
    ) 
    VALUES (
        '$1',
        crypt('$2', gen_salt('bf')),
        '$3',
        '$3',
        '$4',
        '$5',
        (select cityid from city where city_name = '$6'),
        '$7',
        (select country_id from country where country_name = '$8'),
        '$9',
        '$10',
        '$11',
        true,
        (select role_id from roles where role_name = '$12')
    );`,
}