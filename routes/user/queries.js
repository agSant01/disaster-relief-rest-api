module.exports = {
    qRegister: `INSERT INTO users_table 
    (
        username,
        user_password,
        first_name,
        last_name, 
        date_of_birth,
        cityid,
        zip_code,
        country_id, 
        gender,
        email,
        phone_number,
        is_enabled,
        role_id,
        street1,
        street2
    ) 
    VALUES (
        $1,
        crypt($2, gen_salt('bf')),
        $3,
        $4,
        $5,
        (select cityid from city where lower(city_name) = lower($6)),
        $7,
        (select country_id from country where lower(country_name) = lower($8)),
        $9,
        $10,
        $11,
        true,
        (select role_id from roles where role_id = $12),
        $13,
        $14
    ) returning userid;`,
    //users route
    qAllUsers: `
        select 
            userid,
            first_name,
            last_name,
            city.city_name,
            senate_region.senate_region_name as senate_region,
            country.country_name,
            users_table.email,
            users_table.phone_number,
            users_table.street1,
            users_table.street2,
            users_table.zip_code,
            roles.role_name
        from users_table
        natural join city
        natural join country
        natural join roles
        inner join senate_region on 
        senate_region.senate_region_id=city.city_senate_region
        where is_enabled = true;`,
    qAllUsersDebug: `select * from users_table;`,
    qUser: `
        select 
            userid,
            first_name,
            last_name,
            senate_region.senate_region_name as senate_region,
            city.city_name,
            country.country_name,
            users_table.email,
            users_table.phone_number,
            users_table.street1,
            users_table.street2,
            users_table.zip_code,
            roles.role_name
        from users_table
        natural join city
        natural join country
        natural join roles
        inner join senate_region on 
        senate_region.senate_region_id=city.city_senate_region
        where userid=$1 and is_enabled=$2;`,
    qUserDebug: `select * from users_table where userid=$1 and is_enabled = $2;`,
    qRoles: `select * from roles;`,
    qGetRequestsByUserId: `
            select 
                request_id,
                request.date_requested,
                (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource.resource_id,
                    resource.resource_quantity as requested_quantity,
                    resource.resource_location_latitude,
                    resource.resource_location_longitude,
                    resource_status.resource_status_name,
                    resource_type.resource_type_name,
                    ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
                    (
                        select json_agg(row_to_json((SELECT d FROM (SELECT 
                            resource_type_field_name as attribute_name,
                            resource_type_field_value as attribute_value
                        ) d)))
                        from  resource_attribute 
                        where resource_attribute.resource_id = resource.resource_id
                    ) as attributes
                    ) d))) 
                    from resource 
                    natural join requested_resources
                    natural join resource_type
                    natural join resource_status
                    where requested_resources.request_id = request.request_id
                ) as resource
        from request
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
                reserves.date_reserved,
                (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource.resource_id,
                    reserved_resources.resources_quantity as reserved_quantity,
                    resource.resource_location_latitude,
                    resource.resource_location_longitude,
                    resource_type.resource_type_name,
                    resource.resource_quantity,
                    ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,    
                    (
                        select json_agg(row_to_json((SELECT d FROM (SELECT 
                            resource_type_field_name as attribute_name,
                            resource_type_field_value as attribute_value
                        ) d)))
                        from  resource_attribute 
                        where resource_attribute.resource_id = reserved_resources.resource_id
                    ) as attributes
                    ) d)))
                    from reserved_resources
                    natural join resource
                    natural join resource_type
                    where reserved_resources.reserve_id = reserves.reserve_id
                ) as resources_reserved
        from reserves
        where reserves.userid = $1;`,
    qGetPurchasesByUserId: `
        select 
            orders.order_id as purchase_id,
            payment_method.payment_method_name as payment_method,
            (
            select json_agg(row_to_json((SELECT d FROM (SELECT 
                resource.resource_id,
                resource_ordered.resources_quantity as purchased_quantity,
                resource.resource_location_latitude,
                resource.resource_location_longitude,
                resource_type.resource_type_name,
                ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,    
                (
                    select json_agg(row_to_json((SELECT d FROM (SELECT 
                        resource_type_field_name as attribute_name,
                        resource_type_field_value as attribute_value
                    ) d)))
                    from  resource_attribute 
                    where resource_attribute.resource_id = resource_ordered.resource_id
                ) as attributes
                ) d)))
                from resource_ordered
                natural join resource
                natural join resource_type
                where resource_ordered.order_id = orders.order_id
            ) as resources_purchased,
            orders.order_timestamp as date_purchased
        from orders
        natural join payment_method
        where orders.userid = $1
        order by orders.order_id;
    `,
    qGetPurchasesByUserIdAndOrderId: `
        select 
            orders.order_id as purchase_id,
            payment_method.payment_method_name as payment_method,
            (
            select json_agg(row_to_json((SELECT d FROM (SELECT 
                resource.resource_id,
                resource_ordered.resources_quantity as purchased_quantity,
                resource.resource_location_latitude,
                resource.resource_location_longitude,
                resource_type.resource_type_name,
                ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,    
                (
                    select json_agg(row_to_json((SELECT d FROM (SELECT 
                        resource_type_field_name as attribute_name,
                        resource_type_field_value as attribute_value
                    ) d)))
                    from  resource_attribute 
                    where resource_attribute.resource_id = resource_ordered.resource_id
                ) as attributes
                ) d)))
                from resource_ordered
                natural join resource
                natural join resource_type
                where resource_ordered.order_id = orders.order_id
            ) as resources_purchased,
            orders.order_timestamp as date_purchased
        from orders
        natural join payment_method
        where orders.userid = $1 and 
        orders.order_id = $2
        order by orders.order_id;`,
    qToggle: `update users_table
        set is_enabled = $2
        where username = $1;`,
};
