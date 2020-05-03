module.exports = {
    //users route
    qAllUsers: `select * from users_table;`,
    qUser:`select * from users_table where userid=$1;`,
    qRoles:`select * from roles;`,
    qRequestsFromUser:`select * from requests 
    where request_id 
    in (select distinct request_id 
        from requests natural inner join users_table 
        where userid = $1) );`,
    //login
    qLogin = `select * from users_table 
    where username = '$1' and user_password = 'crypt('$2', gen_salt('bf'))'
    `,
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
    //organizations
    qAllOrganizations:`select * from organization`,
   
    qRegisterOrganization:`insert into organization (
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
        '$1',
        (select userid from users_table where username='$2'),
        '$3',
        '$4',
        (select cityid from city where city_name = '$5'),
        '$6',
        (select country_id from country where country_name = '$7'),
        '$8',
        '$9',
        $10
    );`,
    qOrganizationByID: `select * from organization where organization_id = $1`,
    
    qOrganizationRepresentative:`select first_name, last_name, city, email,phone_number
    from users_table where userid in (select U.userid
    from organization_representative as R
    inner join organization as O on R.organization_id = O.organization_id
    inner join users_table as U on  R.userid = U.userid 
    where R.organization_id = $1)`,

    qOrganizationRepresentativeRegister:`insert into organization_representative (
        organization_representative_id,
        organization_id
    ) values 
    (
        (select userid from users_table where username = '$1'),
        (select organization_id from organization where organization_name = '$2')
    );`,
    qOrganizationAddRepresentative:`insert into organization_representative (
        userid,
        organization_id
    ) values 
    (
        (select userid from users_table where username = '$1'),
        (select organization_id from organization where organization_id = $2)
    );`,

    //resources
    qAllTypes:`select * from resource_type`,

    qAttributeByResourceType:`select resource_type_field_name, resource_type_field_value
    from resource_attribute_definition
    where resource_attribute_id in (select P.resource_attribute_id 
                   from resource_attribute_definition as P
                    natural inner join resource_type as T 
                    where T.resource_type_name = '$1')`,
    
    
    
}