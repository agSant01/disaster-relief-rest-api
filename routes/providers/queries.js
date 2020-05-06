module.exports = {
    qAllOrganizations: `
    select 
        organization_id,
        organization_name,
        street1,
        street2,
        city.city_name,
        zip_code,
        country.country_name,
        phone_number,
        email,
        (select row_to_json((SELECT d FROM (SELECT 
            userid, 
            first_name, 
            last_name, 
            users_table.phone_number,
            users_table.email,
            city.city_name
        ) d)) 
        from users_table 
        natural join city
        WHERE users_table.userid = organization.organization_manager_id)
        as organization_manager
    from organization
    natural join city
    inner join country on country.country_id = organization.country_id;`,

    qAllOrganizationsDebug: `
    select 
        *,
        (select row_to_json((SELECT d FROM (SELECT 
            userid, 
            first_name, 
            last_name, 
            users_table.phone_number,
            users_table.email,
            city.city_name
        ) d)) 
        from  users_table 
        natural join city
        WHERE users_table.userid = organization.organization_manager_id)
        as organization_manager
    from organization
    natural join city
    inner join country on country.country_id = organization.country_id;`,

    qGetAllProviders: `
        SELECT 
            userid as providerid,
            first_name,
            last_name,
            role_name,
            role_description,
            email,
            phone_number,
            city.city_name as provider_city
        FROM users_table 
        NATURAL join roles as r
        natural join city
        WHERE 
            (r.role_id = 3 or 
            r.role_id = 5 or 
            r.role_id = 6) AND
            is_enabled = true;`,

    qGetAllProvidersDebug: `
        SELECT 
            *
        FROM users_table
        WHERE 
            (role_id = 3 or 
            role_id = 5 or 
            role_id = 6) AND
            is_enabled = true;`,

    qGetProviderById: `
            SELECT 
                userid as providerid,
                first_name,
                last_name,
                role_name,
                role_description,
                email,
                phone_number,
                city.city_name as provider_city
            FROM users_table 
            NATURAL join roles as r
            natural join city
            WHERE 
                (r.role_id = 3 or 
                r.role_id = 5 or 
                r.role_id = 6) AND
                is_enabled = true AND
                userid = $1;`,
    qGetProviderByIdDebug: `
            SELECT 
                *
            FROM users_table 
            WHERE 
                (role_id = 3 or 
                role_id = 5 or 
                role_id = 6) AND
                is_enabled = true AND
                userid = $1;`,

    qRegisterOrganization: `insert into organization (
        organization_name, 
        organization_manager_id,
        street1,
        street2,
        cityid,
        zip_code,
        country_id,
        phone_number,
        email,
        is_enabled
    )
    values(
        $1,
        (select userid from users_table where username=$2),
        $3,
        $4,
        (select cityid from city where city_name = $5),
        $6,
        (select country_id from country where country_name = $7),
        $8,
        $9,
        $10
    );`,

    qOrganizationByID: `select 
            organization_id,
            organization_name,
            street1,
            street2,
            city.city_name,
            zip_code,
            country.country_name,
            phone_number,
            email,
            (select row_to_json((SELECT d FROM (SELECT 
                userid, 
                first_name, 
                last_name, 
                users_table.phone_number,
                users_table.email,
                city.city_name
            ) d)) 
            from users_table 
            natural join city
            WHERE users_table.userid = organization.organization_manager_id)
            as organization_manager
        from organization
        natural join city
        natural join country
        where organization.organization_id = $1;`,

    qOrganizationByIdDebug: `select 
           *,
            (select row_to_json((SELECT d FROM (SELECT 
                userid, 
                first_name, 
                last_name, 
                users_table.phone_number,
                users_table.email,
                city.city_name
            ) d)) 
            from users_table 
            natural join city
            WHERE users_table.userid = organization.organization_manager_id)
            as organization_manager
        from organization
        natural join city
        natural join country
        where organization.organization_id = $1;`,

    qOrganizationRepresentative: `
        select 
            userid as providerid,
            first_name,
            last_name,
            role_name,
            role_description,
            users_table.email,
            users_table.phone_number,
            city.city_name as provider_city,
            country.country_name
        from users_table
        natural join city
        inner join country on country.country_id = users_table.country_id
        natural join organization_representative
        inner join organization on organization.organization_id = organization_representative.organization_id
        inner join roles on users_table.role_id = roles.role_id 
        where organization.organization_id = $1;`,
    qOrganizationRepresentativeDebug: `
        select 
        *
        from users_table
        natural join city
        natural join country
        natural join roles 
        natural join organization_representative
        inner join organization on organization.organization_id = organization_representative.organization_id
        where organization.organization_id = $1;`,

    qOrganizationRepresentativeRegister: `insert into organization_representative (
        organization_representative_id,
        organization_id
    ) values 
    (
        (select userid from users_table where username = $1),
        (select organization_id from organization where organization_name = $2)
    );`,
    qOrganizationAddRepresentative: `insert into organization_representative (
        userid,
        organization_id
    ) values 
    (
        (select userid from users_table where username = $1),
        (select organization_id from organization where organization_id = $2)
    );`,
};
