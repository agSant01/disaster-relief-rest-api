module.exports = {
    qAllOrganizations: `select * from organization`,

    qGetAllProviders: `
        SELECT 
            first_name,
            last_name,
            username,
            role_name,
            role_description,
            email,
            phone_number,
            city.city_name
        FROM users_table 
        NATURAL join roles as r
        inner join city on users_table.city = city.cityid
        WHERE 
            (r.role_id = 3 or 
            r.role_id = 5 or 
            r.role_id = 6) AND
            is_enabled = true;`,

    qRegisterOrganization: `insert into organization (
        organization_name, 
        organization_manager_id,
        street1,
        street2,
        city,
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
    qOrganizationByID: `select * from organization where organization_id = $1`,

    qOrganizationRepresentative: `select first_name, last_name, city, email,phone_number
    from users_table where userid in (select U.userid
    from organization_representative as R
    inner join organization as O on R.organization_id = O.organization_id
    inner join users_table as U on  R.userid = U.userid 
    where R.organization_id = $1)`,

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
