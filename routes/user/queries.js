module.exports = {
    // @todo: add get all administrator query
    //users route
    qAllUsers: `
        select 
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
        inner join city on city.cityid = users_table.city
        inner join country on country.country_id = users_table.country_id
        inner join roles on roles.role_id = users_table.role_id
        where is_enabled = true;`,
    qAllUsersDebug: `select * from users_table;`,
    qUser: `
        select 
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
        inner join city on city.cityid = users_table.city
        inner join country on country.country_id = users_table.country_id
        inner join roles on roles.role_id = users_table.role_id
        where userid=$1 and is_enabled = $2;`,
    qUserDebug: `select * from users_table where userid=$1 and is_enabled = $2;`,
    qRoles: `select * from roles;`,
    qRequestsFromUser: `
    select * from request 
    where request_id 
    in (select distinct request_id 
        from request natural inner join users_table 
        where userid = $1);`,
    qGetAdministrators: `
        select 
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
        inner join city on city.cityid = users_table.city
        inner join country on country.country_id = users_table.country_id
        inner join roles on roles.role_id = users_table.role_id
        where (roles.role_id = 1 or roles.role_id = 2) and
        is_enabled = true;`,
    qGetAdministratorsDebug: `
        select 
            *
        from users_table
        inner join city on city.cityid = users_table.city
        inner join country on country.country_id = users_table.country_id
        inner join roles on roles.role_id = users_table.role_id
        where roles.role_id = 1 or roles.role_id = 2;`,
};
