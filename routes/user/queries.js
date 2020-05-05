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
        natural join city
        natural join country
        natural join roles
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
        natural join city
        natural join country
        natural join roles
        where userid=$1 and is_enabled = $2;`,
    qUserDebug: `select * from users_table where userid=$1 and is_enabled = $2;`,
    qRoles: `select * from roles;`,
    qGetRequestsByUserId: `
        select 
            request_id,
            resource.resource_quantity as requested_quantity,
            request.date_requested,
            (
            select row_to_json((SELECT d FROM (SELECT 
                resource.resource_id,
                resource.resource_location_latitude,
                resource.resource_location_longitude,
                resource_status.resource_status_name,
                resource_type.resource_type_name,
                (
                    select json_agg(row_to_json((SELECT d FROM (SELECT 
                        resource_type_field_name as attribute_name,
                        resource_type_field_value as attribute_value
                    ) d)))
                    from  resource_attribute 
                    where resource_attribute.resource_id = resource.resource_id
                ) as attributes
                ) d)) 
                from resource 
                natural join resource_type
                natural join resource_status
                where resource.resource_id = request.resource_id
            ) as resource
        from request
        natural join resource
        where request.userid = $1;`,
    qRequestsFromUser: `
    select * 
    from request 
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
        natural join city 
        natural join country
        natural join roles
        where (roles.role_id = 1 or roles.role_id = 2) and
        is_enabled = true;`,
    qGetAdministratorsDebug: `
        select 
            *
        from users_table
        natural join city
        natural join country
        natural join roles
        where roles.role_id = 1 or roles.role_id = 2;`,

    qGetReservesByUserId: `
        select 
            reserve_id,
            reserves.quantity as reserved_quantity,
            reserves.date_reserved,
        (
            select row_to_json((SELECT d FROM (SELECT 
                resource.resource_id,
                resource.resource_location_latitude,
                resource.resource_location_longitude,
                resource_status.resource_status_name,
                resource_type.resource_type_name,
                resource.resource_quantity,
                (
                    select json_agg(row_to_json((SELECT d FROM (SELECT 
                        resource_type_field_name as attribute_name,
                        resource_type_field_value as attribute_value
                    ) d)))
                    from  resource_attribute 
                    where resource_attribute.resource_id = resource.resource_id
                ) as attributes
                ) d)) 
                from resource 
                natural join resource_type
                natural join resource_status
                where reserves.resource_id = resource.resource_id
            ) as resource
        from reserves
        where reserves.userid = $1;`,
    qGetPurchasesByUserId: `
    
    `,
};
