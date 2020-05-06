-- insert senatorial regions
insert into senate_region(senate_region_name) values('I - San Juan');
insert into senate_region(senate_region_name) values('II - Bayamon');
insert into senate_region(senate_region_name) values('III - Arecibo');
insert into senate_region(senate_region_name) values('IV - Mayaguez-Aguadilla');
insert into senate_region(senate_region_name) values('V - Ponce');
insert into senate_region(senate_region_name) values('VI - Guayama');
insert into senate_region(senate_region_name) values('VII - Humacao');
insert into senate_region(senate_region_name) values('VIII - Carolina');

insert into country(country_name) values('Puerto Rico');
insert into country(country_name) values('Australia');
insert into country(country_name) values('Bahamas');
insert into country(country_name) values('Chile');
insert into country(country_name) values('Denmark');
insert into country(country_name) values('Fiji');
insert into country(country_name) values('Germany');
insert into country(country_name) values('Jamaica');
insert into country(country_name) values('Mozambique');
insert into country(country_name) values('Uganda');

with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Adjuntas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Guanica', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Guayanilla', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Jayuya', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Lajas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Lares', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Maricao', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Penuelas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Ponce', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Sabana Grande', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Utuado', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'V - Ponce') insert into city (city_name,city_senate_region) select 'Yauco', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Aguada', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Aguadilla', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Anasco', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Cabo Rojo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Hormigueros', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Isabela', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Las Marías', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Mayaguez', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Moca', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'Rincon', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'San German', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla') insert into city (city_name,city_senate_region) select 'San Sebastian', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Aibonito', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Arroyo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Barranquitas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Cayey', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Cidra', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Coamo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Comerío', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Corozal', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Guayama', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Juana Díaz', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Naranjito', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Orocovis', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Salinas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Santa Isabel', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VI - Guayama') insert into city (city_name,city_senate_region) select 'Villalba', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Arecibo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Barceloneta', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Camuy', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Ciales', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Dorado', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Florida', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Hatillo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Manatí', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Morovis', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Quebradillas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Vega Alta', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'III - Arecibo') insert into city (city_name,city_senate_region) select 'Vega Baja', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'II - Bayamon') insert into city (city_name,city_senate_region) select 'Bayamon', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'II - Bayamon') insert into city (city_name,city_senate_region) select 'Catano', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'II - Bayamon') insert into city (city_name,city_senate_region) select 'Toa Alta', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'II - Bayamon') insert into city (city_name,city_senate_region) select 'Toa Baja', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Caguas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Gurabo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Humacao', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Juncos', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Las Piedras', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Maunabo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Naguabo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Patillas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'San Lorenzo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VII - Humacao') insert into city (city_name,city_senate_region) select 'Yabucoa', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Canovanas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Carolina', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Ceiba', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Culebra', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Fajardo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Loiza', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Luquillo', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Rio Grande', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Trujillo Alto', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'VIII - Carolina') insert into city (city_name,city_senate_region) select 'Vieques', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'I - San Juan') insert into city (city_name,city_senate_region) select 'San Juan', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'I - San Juan') insert into city (city_name,city_senate_region) select 'Aguas Buenas', senate_region_id from sid;
with sid as (select senate_region_id from senate_region where senate_region_name = 'I - San Juan') insert into city (city_name,city_senate_region) select 'Guaynabo', senate_region_id from sid;

insert into roles(role_name, role_description)
values(
    'System Administrator',
    'Add Managers.
Enable/Disable requester, supplier, and organization accounts.
Add new resource types.
Edit resource type data.
Deactivate resource types.
Cancel resource requests.
Cancel resource availability.
Visibility of all the submitted resource requests and resource availability tickets.
View of all the available inventory by resource type.
View sold resources by resource type.
View reserved resources by resource type.
');
insert into roles(role_name, role_description)
values('System Manager','
Enable/Disable requester, supplier, and organization accounts.
Add new resource types.
Edit resource type data.
Deactivate resource types.
Cancel resource requests.
Cancel resource availability.
Visibility of all the submitted resource requests and resource availability tickets.
View of all the available inventory by resource type.
View sold resources by resource type.
View reserved resources by resource type.
');
insert into roles(role_name, role_description)
values('Individual Supplier','Submit resources to the system.
Withdraw resource availability ticket. (This will only remove items that have not been bought or reserved.).
');
insert into roles(role_name, role_description)
values('Requester','Submit resource request ticket.
Withdraw resource request ticket.
');
insert into roles(role_name, role_description)
values('Supplier Organization Administrator','Can create an organization.
Update organization information.
Can add representatives to the organization.
All the permissions of an individual supplier.
');
insert into roles(role_name, role_description)
values('Supplier Organization Representative','Related to an organization.
All the permissions of an individual supplier.
');

-- insert admin
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    is_enabled,
    role_id
) 
VALUES (
    'adminaccount',
    crypt('password123', gen_salt('bf')),
    'Admin',
    '',
    '2000-01-01',
    '',
    '',
    (select cityid from city where city_name = 'San Juan'),
    '00000',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'system@admin.com',
    true,
    (select role_id from roles where role_name = 'System Administrator')
);

INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'gabrielsantiago',
    crypt('gaby', gen_salt('bf')),
    'Gabriel',
    'Santiago',
    '1998-03-26',
    'Ext. Montesol Calle Yaurel 3023',
    (select cityid from city where city_name = 'Cabo Rojo'),
    '00623',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'gabriel.santiago16@upr.edu',
    '9392001002',
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);


INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'valeria',
    crypt('vale', gen_salt('bf')),
    'Valeria',
    'Collado',
    '1988-03-26',
    'Urb. Villa Vista Mar',
    'Calle 5',
    (select cityid from city where city_name = 'Arecibo'),
    '00623',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'valeria.collado@upr.edu',
    7873850862,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Representative')
);

    --#4 System Manager
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'paulhogan',
    crypt('dundee', gen_salt('bf')),
    'Paul',
    'Hogan',
    '1968-08-08',
    '3153 W',
    '88st',
    (select cityid from city where city_name = 'Guayama'),
    '44102',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'paul.hogan@hotmail.com',
    2165902438,
    true,
    (select role_id from roles where role_name = 'System Manager')
);

    --#5 Individual Supplier
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES ( 
    'ballen',
    crypt('flash', gen_salt('bf')),
    'Barry',
    'Allen',
    '1940-01-01',
    'Urb. Terrace',
    'Calle 3',
    (select cityid from city where city_name = 'Bayamon'),
    '00624',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'barry.allen@gmail.com',
    7875902438,
    true,
    (select role_id from roles where role_name = 'Individual Supplier')
);

    --#6 Requester
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'annaprentice',
    crypt('first', gen_salt('bf')),
    'Anna',
    'Prentice',
    '1987-11-23',
    'Urb. Ocean Park',
    'Calle 11',
    (select cityid from city where city_name = 'Adjuntas'),
    '00692',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'anna.prentice@gmail.com',
    7871059206,
    true,
    (select role_id from roles where role_name = 'Requester')
);

    --#7 Requester
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'carlitos',
    crypt('medalla', gen_salt('bf')),
    'Carlos',
    'Fernandez',
    '1989-04-24',
    'Marias III',
    'Calle 101',
    (select cityid from city where city_name = 'Mayaguez'),
    '00602',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'carlos.fernandez@upr.edu',
    7871247902,
    true,
    (select role_id from roles where role_name = 'Requester')
);

    --#8 Individual Supplier
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES ( 
    'lourdes',
    crypt('beach123', gen_salt('bf')),
    'Lourdes',
    'Ramirez',
    '1996-08-24',
    'Urb. Alturas',
    'Calle 13',
    (select cityid from city where city_name = 'Carolina'),
    '00624',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'lourdes.ramirez@gmail.com',
    7875902438,
    true,
    (select role_id from roles where role_name = 'Individual Supplier')
);

    --#9 Individual Supplier
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES ( 
    'lehiasoto',
    crypt('beach123', gen_salt('bf')),
    'Lehia',
    'Soto',
    '1979-06-12',
    'Dylan Street',
    '10235',
    (select cityid from city where city_name = 'Ponce'),
    '32825',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'lehia.soto@live.com',
    7875902438,
    true,
    (select role_id from roles where role_name = 'Individual Supplier')
);

    --#10 Requester
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'juliatorres',
    crypt('thor', gen_salt('bf')),
    'Julia',
    'Torres',
    '1962-03-17',
    'Ramon Powell',
    'Calle 3',
    (select cityid from city where city_name = 'Fajardo'),
    '00692',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'julio.torres@yahoo.com',
    7871059206,
    true,
    (select role_id from roles where role_name = 'Requester')
);

   --#11 Supplier Organization Administrator
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'pacheco',
    crypt('cris', gen_salt('bf')),
    'Cristian',
    'Pachecho',
    '1992-12-25',
    'Calle Felicidad',
    'Calle 494',
    (select cityid from city where city_name = 'Moca'),
    '00676',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'cristian.pacheco@gmail.com',
    7871059206,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

   --#12 Supplier Organization Administrator
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'yaniraruiz',
    crypt('cris', gen_salt('bf')),
    'Yanira',
    'Ruiz',
    '1958-08-11',
    'Calle Escorpion',
    'Calle 333',
    (select cityid from city where city_name = 'San Juan'),
    '00692',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'yanira.ruiz@gmail.com',
    7871234567,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

   --#13 Supplier Organization Administrator
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'axperez',
    crypt('roca', gen_salt('bf')),
    'Alexis',
    'Perez',
    '1975-09-24',
    'Calle Tabula',
    'Calle Rasa',
    (select cityid from city where city_name = 'San Juan'),
    '00692',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'axperez@gmail.com',
    7870964386,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

    --#14 Supplier Organization Administrator   
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'dhernandez',
    crypt('roca', gen_salt('bf')),
    'David',
    'Hernandez',
    '1986-07-04',
    'Calle Rivera',
    'Calle 567',
    (select cityid from city where city_name = 'Utuado'),
    '00612',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'dhernandez@gmail.com',
    7870987654,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

    --#15 Supplier Organization Administrator  
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'juanperez',
    crypt('chocolate', gen_salt('bf')),
    'Juan',
    'Perez',
    '1993-09-30',
    'Calle Chano',
    'Calle 4444',
    (select cityid from city where city_name = 'Aguada'),
    '00654',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'juanperez@gmail.com',
    78754208213,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

 --#16 Supplier Organization Administrator  
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'lilliancruz',
    crypt('einstein', gen_salt('bf')),
    'Lillian',
    'Cruz',
    '1975-08-17',
    'Calle Flores',
    'Calle 1567',
    (select cityid from city where city_name = 'Fajardo'),
    '00654',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'lcruz@yahoo.com',
    7870963346,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

 --#17 Supplier Organization Administrator  
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'vsoto',
    crypt('alaska', gen_salt('bf')),
    'Victor',
    'Soto',
    '1984-02-28',
    'Calle Whitney',
    'Calle 2',
    (select cityid from city where city_name = 'Lares'),
    '00098',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'victorsoto@gmail.com',
    9390963346,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

 --#18 Supplier Organization Administrator  
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'tress',
    crypt('oven123', gen_salt('bf')),
    'Matt',
    'Tress',
    '1973-12-12',
    'Calle Lord',
    'Calle 24',
    (select cityid from city where city_name = 'Camuy'),
    '442344',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Male',
    'matttress@gmail.com',
    2165023467,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);

 --#19 Supplier Organization Administrator  
INSERT INTO users_table 
(
    username,
    user_password,
    first_name,
    last_name, 
    date_of_birth,
    street1,
    street2,
    cityid,
    zip_code,
    country_id, 
    gender,
    email,
    phone_number,
    is_enabled,
    role_id
) 
VALUES (
    'paulacordero',
    crypt('arroz123', gen_salt('bf')),
    'Paula',
    'Cordero',
    '1980-01-15',
    'Calle Paseo',
    'Calle 435',
    (select cityid from city where city_name = 'Hatillo'),
    '00345',
    (select country_id from country where country_name = 'Puerto Rico'),
    'Female',
    'paulacordero@live.com',
    7872344421,
    true,
    (select role_id from roles where role_name = 'Supplier Organization Administrator')
);


--organization
insert into organization (
    organization_name, 
    organization_manager_id,
    street1,
    cityid,
    zip_code,
    country_id,
    phone_number,
    email,
    is_enabled
)
values(
    'ICOM Helpers',
    (select userid from users_table where username='gabrielsantiago'),
    'Calle Candelaria #34',
    (select cityid from city where city_name = 'Mayaguez'),
    '00681',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7875550021',
    'uprmhelpers@gmail.com',
    true
);

    --#2
insert into organization (
    organization_name, 
    organization_manager_id,
    street1,
    cityid,
    zip_code,
    country_id,
    phone_number,
    email,
    is_enabled
)
values(
    'Good Vibers',
    (select userid from users_table where username='pacheco'),
    'Calle Cordero',
    (select cityid from city where city_name = 'Isabela'),
    '00623',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7870281204',
    'goodvibers@gmail.com',
    true
);

    --#3
insert into organization (
    organization_name, 
    organization_manager_id,
    street1,
    cityid,
    zip_code,
    country_id,
    phone_number,
    email,
    is_enabled
)
values(
    'GG',
    (select userid from users_table where username='yaniraruiz'),
    'Calle Palmeras',
    (select cityid from city where city_name = 'Quebradillas'),
    '00623',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7870189667',
    'gg@live.com',
    true
);

    --#4
insert into organization (
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
    'FunRunners',
    (select userid from users_table where username='axperez'),
    'Calle Turquesa',
    'Calle 123',
    (select cityid from city where city_name = 'Bayamon'),
    '00656',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7876730965',
    'FunRunners@hotmail.com',
    true
);
    --#5
insert into organization (
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
    'Goal4Us',
    (select userid from users_table where username='dhernandez'),
    'Calle Juana La Blanca',
    'Carr 098',
    (select cityid from city where city_name = 'Humacao'),
    '00665',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7870981234',
    'goal4us@bing.com',
    true
);

 --#6
insert into organization (
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
    'JCI',
    (select userid from users_table where username='juanperez'),
    'Calle Trastalleres',
    'Calle 24',
    (select cityid from city where city_name = 'Mayaguez'),
    '00682',
    (select country_id from country where country_name = 'Puerto Rico'),
    '9393059831',
    'juniorchamberinternational@hotmail.com',
    true
);

    --#7
insert into organization (
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
    'The Salvation Army',
    (select userid from users_table where username='lilliancruz'),
    'Calle Colores',
    'Calle 109',
    (select cityid from city where city_name = 'Hormigueros'),
    '00687',
    (select country_id from country where country_name = 'Puerto Rico'),
    '9390983887',
    'salvationarmy@live.com',
    true
); 

    --#8
insert into organization (
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
    'Soles4Souls',
    (select userid from users_table where username='vsoto'),
    'Calle Jobos',
    'Calle 107',
    (select cityid from city where city_name = 'Isabela'),
    '00603',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7879013344',
    'soles4souls@live.com',
    true
); 

    --#9
insert into organization (
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
    'Casa Linda',
    (select userid from users_table where username='tress'),
    'Calle Hulk',
    'Calle 48',
    (select cityid from city where city_name = 'Dorado'),
    '00631',
    (select country_id from country where country_name = 'Puerto Rico'),
    '7870004444',
    'casalinda@hotmail.com',
    true
); 

--#10
insert into organization (
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
    'SiembraVida',
    (select userid from users_table where username='paulacordero'),
    'Calle Lirios del Valle',
    'Calle 48',
    (select cityid from city where city_name = 'Carolina'),
    '00123',
    (select country_id from country where country_name = 'Puerto Rico'),
    '9395670009',
    'siembravida@gmail.com',
    true
);


--organization representative
insert into organization_representative (
    userid,
    organization_id
) values 
(
    (select userid from users_table where username = 'valeria'),
    (select organization_id from organization where organization_name = 'ICOM Helpers')
);
insert into organization_representative (
    userid,
    organization_id
) values 
(
    (select userid from users_table where username = 'gabrielsantiago'),
    (select organization_id from organization where organization_name = 'ICOM Helpers')
);


-- insert delivery methods
insert into delivery_method(method_name) values('Delivery');
insert into delivery_method(method_name) values('Pick-up');
insert into delivery_method(method_name) values('Delivery or Pick-up');

-- payment methods
insert into payment_method(payment_method_name) values('Credit Card');
insert into payment_method(payment_method_name) values('Debit');
insert into payment_method(payment_method_name) values('Cash');
insert into payment_method(payment_method_name) values('WIC');
insert into payment_method(payment_method_name) values('ATH-Movil');
insert into payment_method(payment_method_name) values('PayPal');
insert into payment_method(payment_method_name) values('ApplePay');
insert into payment_method(payment_method_name) values('Venmo');
insert into payment_method(payment_method_name) values('CashApp');
insert into payment_method(payment_method_name) values('Zelle');

-- request status
insert into request_status(request_status_name, request_status_description) values('Unfulfilled', 'Resources have not been bought or  reserved');
insert into request_status(request_status_name, request_status_description) values('Cancelled', 'Ticket was cancelled by System  Administrator ');
insert into request_status(request_status_name, request_status_description) values('Fulfilled', 'Resources have not been bought or  reserved');
insert into request_status(request_status_name, request_status_description) values('Withdrawn', 'Request ticket was withdrawn by the  requesto');


-- resource status
insert into resource_status(resource_status_name, resource_status_description) values('Available', 'Resources of ticket still available');
insert into resource_status(resource_status_name, resource_status_description) values('Cancelled', 'Ticket was cancelled by System  Administrator');
insert into resource_status(resource_status_name, resource_status_description) values('Exhausted', 'Resources of ticket depleted');
insert into resource_status(resource_status_name, resource_status_description) values('Withdrawn', 'Remaining resources of the ticket were  withdrawn by the supplier');

-- insert resource types
insert into resource_type(resource_type_name) values('Water');
insert into resource_type(resource_type_name) values('Medication');
insert into resource_type(resource_type_name) values('Baby Food');
insert into resource_type(resource_type_name) values('Canned Food');
insert into resource_type(resource_type_name) values('Dry Food');
insert into resource_type(resource_type_name) values('Ice');
insert into resource_type(resource_type_name) values('Fuel');
insert into resource_type(resource_type_name) values('Medical Device');
insert into resource_type(resource_type_name) values('Heavy Equipment');
insert into resource_type(resource_type_name) values('Tool');
insert into resource_type(resource_type_name) values('Clothing');
insert into resource_type(resource_type_name) values('Power Generator');
insert into resource_type(resource_type_name) values('Battery');


--Water
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    'Water Type',
    'Purified'
);  
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    'Water Type',
    'Distilled '
);   
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    'Expiration Date',
    'mm/dd/yyyy'
);
 
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    'Container Size',
    '16oz.'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    'Container Size',
    '64oz. (1 Gal.)' 
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    'Quantity Per Unit',
    null
);

-- Medications
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    'Medication Name',
    null
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    'Medication Type',
    'Probiotics'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    'Medication Type',
    'Antipsychotics'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    'Medication Type',
    'Anti-Inflammatory'
);
insert into resource_attribute_definition (    
resource_type_id,
resource_type_field_name,
resource_type_field_value
)
values(
(SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
'Expiration Date',
'mm/dd/yyyy'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    'Quantity Per Unit',
    null
);

-- Baby Food 
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),'Baby Food Type','Stage 1');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),'Baby Food Type','Stage 2');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),'Baby Food Type','Stage 3');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),'Baby Food Type','Stage 4');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),'Baby Food Name', null);
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),'Expiration Date','mm/dd/yyyy');
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),
    'Quantity Per Unit',
    null
);

--Canned Food
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Quantity Per Unit',
    null
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Canned Food Name',
    null
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Canned Food Type',
    'Soups'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Canned Food Type',
    'Fruits'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Canned Food Type',
    'Vegetables'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Canned Food Type',
    'Beans'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    'Canned Food Type',
    'Meat/Chicken'
);
insert into resource_attribute_definition (    
resource_type_id,
resource_type_field_name,
resource_type_field_value
)
values(
(SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
'Expiration Date',
'mm/dd/yyyy'
);


--Dry Food 
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Type','Powdered eggs');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Type','Rice');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Type','Bread');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Type','Cereal');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Type','Condensed Milk');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Type','Evaporated Milk');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Dry Food Name', null);
insert into resource_attribute_definition(resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Expiration Date','mm/dd/yyyy');
insert into resource_attribute_definition (resource_type_id,resource_type_field_name,resource_type_field_value)
values((SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),'Quantity Per Unit',null);

--Ice
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Ice'),
    'Ice Type',
    'Ice Bag'
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Ice'),
    'Lbs',
    null
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Ice'),
    'Quantity Per Unit',
    null
);

-- fuel 
-- Fuel type 
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Fuel'), 'Fuel Type','Gasoline');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Fuel'), 'Fuel Type','Diesel');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Fuel'), 'Fuel Type','Gas');
-- fuel octane
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Fuel'),'Octane', null);
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Fuel'),'Measurement Unit', 'Liter');

-- medical device
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Medical Device'), 'Medical Device Type', 'Ventilator');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Medical Device'), 'Medical Device Type', 'Diabetis Monitor');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Medical Device'), 'Device Name', null);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medical Device'),
    'Quantity Per Unit',
    null
);

-- heavy equipment 
-- Equipment Type
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'), 'Equipment Type', 'Excavators');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'), 'Equipment Type', 'Bulldozers');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'), 'Equipment Type', 'Dump Trucks');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'), 'Fuel Type', 'Gasoline');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'), 'Fuel Type', 'Diesel');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),'Transaction Type', 'Buy');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),'Transaction Type', 'Rent');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),'Duration Period Unit', 'Week(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),'Duration Period Unit', 'Day(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),'Duration Period Unit', 'Hour(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),'Duration Period', null);

-- tool
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'), 'Tool Name', 'Chainsaw');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'), 'Tool Name', 'Chipping Hammer');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'), 'Tool Name', 'Drill');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'), 'Power Type', 'Gasoline');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'), 'Power Type', 'Electric');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'),'Transaction Type', 'Buy');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'),'Transaction Type', 'Rent');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'),'Duration Period Unit', 'Week(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'),'Duration Period Unit', 'Day(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'),'Duration Period Unit', 'Hour(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Tool'),'Duration Period', null);

-- clothing
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Piece of Clothing', 'T-Shirt');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Piece of Clothing', 'Pant');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Color', 'Black');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Color', 'Blue');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Color', null);
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Gender', 'Male');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Gender', 'Female');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'XXS');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'XS');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'Small');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'Medium');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'Large');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'XLarge');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', 'XXLarge');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', '3XLarge');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', '(Plus) 1X');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', '(Plus) 2X');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', '(Plus) 3X');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Size', '(Plus) 4X');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Clothing'), 'Quantity Per Unit', null);

-- power generator
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Generator Type', 'Portable');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Generator Type', 'Inverter');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Generator Type', 'Standby');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Fuel Type', 'Gasoline');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Fuel Type', 'Diesel');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Power Rating (Watts)', null);
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Voltage (Volts)', null);
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'), 'Amperage (Amps)', null);
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'),'Transaction Type', 'Buy');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'),'Transaction Type', 'Rent');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'),'Duration Period Unit', 'Week(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'),'Duration Period Unit', 'Day(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'),'Duration Period Unit', 'Hour(s)');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Power Generator'),'Duration Period', null);

-- batteries
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Battery'), 'Battery Type', 'AA');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Battery'), 'Battery Type', 'AAA');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Battery'), 'Battery Type', 'C');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Battery'), 'Battery Type', 'D');
insert into resource_attribute_definition(resource_type_id, resource_type_field_name,resource_type_field_value)
values((select resource_type_id from resource_type where resource_type_name = 'Battery'), 'Battery Type', 'E (9-Volt)');

-- resources
---------------------------------------------
-- create resources as submitted by supplier
with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        100,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Heavy Equipment'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Equipment Type', 'Bulldozers') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Fuel Type', 'Diesel') 
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Transaction Type', 'Rent') 
    RETURNING resource_id
), fifth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Duration Period Unit', 'Week(s)') 
    RETURNING resource_id
), sixth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Duration', 2) 
    RETURNING resource_id
)
-- submitted id 1
insert into submits_resource(resource_id, userid, resource_price, is_for_sale, delivery_method_id)
values(
    (select resource_id from sixth_id),
    (select userid from users_table where username = 'gabrielsantiago'),
    12340.75, -- per unit
    true,
    (select delivery_method_id from delivery_method where method_name = 'Pick-up')
);

with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        500,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Water'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'II - Bayamon')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Water Type', 'Distilled') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Container Size', '64oz. (1 Gal.)') 
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Quantity Per Unit', '20') 
    RETURNING resource_id
), fifth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Expiration Date', '2025-05-09') 
    RETURNING resource_id
)
-- submitted id 2 is free is for reserver
insert into submits_resource(resource_id, userid, resource_price, is_for_sale, delivery_method_id)
values(
    (select resource_id from fifth_id),
    (select userid from users_table where username = 'valeria'),
    0, -- per unit
    false,
    (select delivery_method_id from delivery_method where method_name = 'Pick-up')
);

with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,
    resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        5000,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Medication'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        3
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Medication Name', 'Motrin') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Expiration Date', '2021-05-03') 
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Quantity Per Unit', '25') 
    RETURNING resource_id
), fifth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Medication Type', 'Anti-Inflammatory') 
    RETURNING resource_id
)
-- submitted id 3
insert into submits_resource(resource_id, userid, resource_price, is_for_sale, delivery_method_id)
values(
    (select resource_id from fifth_id),
    (select userid from users_table where username = 'gabrielsantiago'),
    1000, -- per unit
    true,
    (select delivery_method_id from delivery_method where method_name = 'Pick-up')
);

with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        1000,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Battery'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'I - San Juan')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Battery Type', 'AA') 
    RETURNING resource_id
)
-- submitted id 4
insert into submits_resource(resource_id, userid, resource_price, is_for_sale, delivery_method_id)
values(
    (select resource_id from second_id),
    (select userid from users_table where username = 'valeria'),
    20, -- per unit
    true,
    (select delivery_method_id from delivery_method where method_name = 'Delivery')
);

with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        120,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Baby Food'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        5
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Baby Food Type', 'Stage 2') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Baby Food Name', 'Banana and Strawberry blend') 
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Expiration Date', '2022-12-29') 
    RETURNING resource_id
), fifth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Quantity Per Unit', 20) 
    RETURNING resource_id
)
-- submitted id 5 free
insert into submits_resource(resource_id, userid, resource_price, is_for_sale, delivery_method_id)
values(
    (select resource_id from fifth_id),
    (select userid from users_table where username = 'gabrielsantiago'),
    0, -- per unit
    false,
    (select delivery_method_id from delivery_method where method_name = 'Delivery or Pick-up')
);

with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        500,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Fuel'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Fuel Type', 'Gasoline') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Octane', '83')
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Measurement Unit', 'Liter')
    RETURNING resource_id
)
-- submitted id 6
insert into submits_resource(resource_id, userid, resource_price, is_for_sale, delivery_method_id)
values(
    (select resource_id from fourth_id),
    (select userid from users_table where username = 'valeria'),
    1.23, -- per unit
    true,
    (select delivery_method_id from delivery_method where method_name = 'Delivery')
);
--------------------------------------------------------------
--------------------------------------------------------------
-- create resources as requested
with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        10,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Battery'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
)
 -- id = 7
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from first_id), 'Battery Type', 'D');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        10,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Water'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Water Type', 'Purified') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Expiration Date', '2025-12-04')
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Container Size', '16oz.')
    RETURNING resource_id
)
-- resource id = 8
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from SECOND_id), 'Quantity Per Unit', '24');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        50,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Water'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Water Type', 'Distilled') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Expiration Date', '2025-02-04')
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Container Size', '64oz. (1 Gal)')
    RETURNING resource_id
)
-- resource id = 9
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from SECOND_id), 'Quantity Per Unit', '10');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        45,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Water'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Water Type', 'Purified') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Expiration Date', '2025-01-04')
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Container Size', '16oz.')
    RETURNING resource_id
)
-- resource id = 10
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from SECOND_id), 'Quantity Per Unit', '50');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        5,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Tool'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Tool Name', 'Drill') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Power Type', 'Electric')
    RETURNING resource_id
)
-- resource id = 11
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from SECOND_id), 'Transaction Type', 'Buy');

with first_id as (
    insert into resource(resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        10,
        18.19583876,
        -67.13626385,
        (select resource_type_id from resource_type where resource_type_name = 'Power Generator'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Generator Type', 'Inverter') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Fuel Type', 'Gasoline') 
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Power Rating (Watts)', '12,000-W') 
    RETURNING resource_id
), fifth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Voltage (Volts)', '120AC/240AC') 
    RETURNING resource_id
), sixth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Amperage', '30A/10A') 
    RETURNING resource_id
), seventh_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Transaction Type', 'Rent') 
    RETURNING resource_id
), eigth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Duration Period Unit', 'Week(s)') 
    RETURNING resource_id
)
-- resource id = 12
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from eigth_id), 'Duration Period', '3');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        550,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Water'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Water Type', 'Purified') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Expiration Date', '2025-01-30')
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Container Size', '16oz.')
    RETURNING resource_id
)
-- resource id = 13
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from SECOND_id), 'Quantity Per Unit', '24');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        10,
        18.19614793,
        -67.14750767,
        (select resource_type_id from resource_type where resource_type_name = 'Ice'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'IV - Mayaguez-Aguadilla')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Ice Type', 'Bag') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from SECOND_id), 'Lbs', '20')
    RETURNING resource_id
)
-- resource id = 14
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from SECOND_id), 'Quantity Per Unit', '1');


with first_id as (
    insert into resource (resource_quantity,resource_location_latitude,resource_location_longitude,resource_type_id,resource_status_id, senate_region_id)
    values(
        25,
        18.39367141,
        -65.99685431,
        (select resource_type_id from resource_type where resource_type_name = 'Clothing'),
        (select resource_status_id from resource_status where resource_status_name = 'Available'),
        (select senate_region_id from senate_region where senate_region_name = 'I - San Juan')
    ) RETURNING resource_id
), second_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Piece of Clothing', 'T-Shirt') 
    RETURNING resource_id
), third_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Color', 'White') 
    RETURNING resource_id
), fourth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Gender', 'Male') 
    RETURNING resource_id
), fifth_id as (
    insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
    values((select resource_id from first_id), 'Size', 'XL') 
    RETURNING resource_id
)
-- resource id = 15
insert into resource_attribute(resource_id, resource_type_field_name, resource_type_field_value)
values((select resource_id from first_id), 'Quantity Per Unit', '1');

-- insert the resources in the requested table with the resource id
-- adding requests and request transactions 

-------------- everything with request id 1
with request_info as (
    -- request id 1
    insert into request(
        request_status_id,   
        userid               
    )
    values(
        (select request_status_id from request_status where request_status_id = 1),
        (select userid from users_table where username = 'juliatorres')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,
    resource_id
)
values(
    (select request_id from request_info),
    7
);

insert into requested_resources(
    request_id,
    resource_id
)
values(
    1,
    8
);

insert into requested_resources(
    request_id,
    resource_id
)
values(
    1,
    9
);

insert into requested_resources(
    request_id,
    resource_id
)
values(
    1,
    10
);

---------- end of request id 1
---------------------------------------

---- start request id 2
with request_info as (
    insert into request( 
        request_status_id,   
        userid           
    )   
    values(
        (select request_status_id from request_status where request_status_id = 1),
        (select userid from users_table where username = 'annaprentice')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,   
    resource_id   
)
values(
    (select request_id from request_info),
    11
);


insert into requested_resources(
    request_id,
    resource_id
)
values(
    2,
    12
);


insert into requested_resources(
    request_id,
    resource_id
)
values(
    2,
    13
);

------- end request id 2


--- start of request id 3
with request_info as (
    insert into request(    
        request_status_id,   
        userid 
    )             
    values(
    
        (select request_status_id from request_status where request_status_id = 4),
        (select userid from users_table where username = 'carlitos')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id 
)
values(
    (select request_id from request_info),
    14
);

insert into requested_resources(
    request_id,             
    resource_id    
)
values(
    3,
    15
); 

----- end of requst id 3

--- start of request id 4
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 1),
        (select userid from users_table where username = 'annaprentice')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    1,
    3
);
----- end of requst id 4

--- start of request id 5
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 1),
        (select userid from users_table where username = 'carlitos')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    3,
    1
);
----- end of requst id 5

--- start of request id 6
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 2),
        (select userid from users_table where username = 'juliatorres')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    3,
    1
); 
----- end of requst id 6
 
--- start of request id 7 
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 4),
        (select userid from users_table where username = 'annaprentice')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    5,
    13
); 
----- end of requst id 7

--- start of request id 8 
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 3),
        (select userid from users_table where username = 'carlitos')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    3,
    50
); 
----- end of requst id 8

--- start of request id 9
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 4),
        (select userid from users_table where username = 'juliatorres')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    7,
    2
); 
----- end of requst id 9

--- start of request id 10
with request_info as (
    insert into request(                 
        request_status_id,   
        userid 
    )             
    values(    
        (select request_status_id from request_status where request_status_id = 1),
        (select userid from users_table where username = 'carlitos')
    ) RETURNING request_id
)
insert into requested_resources(
    request_id,             
    resource_id,   
    resources_quantity    
)
values(
    (select request_id from request_info),
    4,
    5
);
----- end of requst id 10

--- end of create resources as requested
-------------------------------------------------
---------------------------------------------------

--orders
-- order 1
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'annaprentice'),
    (select payment_method_id from payment_method where payment_method_name = 'Debit')
    
);

-- order 2
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'carlitos'),
    (select payment_method_id from payment_method where payment_method_name = 'WIC')  
);

-- order 3
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'juliatorres'),
    (select payment_method_id from payment_method where payment_method_name = 'Credit Card')  
);

-- order 4
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'annaprentice'),
    (select payment_method_id from payment_method where payment_method_name = 'ATH-Movil')
    
);

-- order 5
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'carlitos'),
    (select payment_method_id from payment_method where payment_method_name = 'PayPal')  
);

-- order 6
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'juliatorres'),
    (select payment_method_id from payment_method where payment_method_name = 'ATH-Movil')  
);

-- order 7
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'annaprentice'),
    (select payment_method_id from payment_method where payment_method_name = 'Venmo')
    
);

-- order 8
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'carlitos'),
    (select payment_method_id from payment_method where payment_method_name = 'Cash')  
);

-- order 9
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'juliatorres'),
    (select payment_method_id from payment_method where payment_method_name = 'ApplePay')  
);

-- order 10
insert into orders(userid,payment_method_id)
values(
    (select userid from users_table where username = 'annaprentice'),
    (select payment_method_id from payment_method where payment_method_name = 'Zelle')
 );   


--ordered resource
insert into resource_ordered(order_id,resource_id,order_price,resources_quantity)
values(
    (select order_id from orders where  order_id  = 1),
    (select resource_id from resource where resource_id = 3),
    13,
    3

);

insert into resource_ordered(order_id,resource_id, order_price, resources_quantity)
values(
    (select order_id from orders where  order_id  = 1),
    (select resource_id from resource where resource_id = 6),
    20,
    1
);

insert into resource_ordered(order_id,resource_id, order_price,resources_quantity)
values(
    (select order_id from orders where  order_id  = 2),
    (select resource_id from resource where resource_id = 1),
    4,
    8
);
insert into resource_ordered(order_id,resource_id, order_price,resources_quantity)
values(
    (select order_id from orders where  order_id  = 2),
    (select resource_id from resource where resource_id = 4),
    7,
    20
);

--#5
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =3),
    (select resource_id from resource where resource_id = 1),
    1,
    12340.75    
);

--#6
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =4),
    (select resource_id from resource where resource_id = 3),
    1,
    1000.00    
);

--#7
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =5),
    (select resource_id from resource where resource_id = 4),
    2,
    40    
);

--#8
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =6),
    (select resource_id from resource where resource_id = 6),
    2,
    2.46    
);

--#9
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =7),
    (select resource_id from resource where resource_id = 1),
    2,
    24681.50    
);

--#10
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =8),
    (select resource_id from resource where resource_id = 6),
    4,
    4.92   
);

--#11
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =9),
    (select resource_id from resource where resource_id = 3),
    2,
    2000   
);

--#12
insert into resource_ordered(order_id,resource_id, resources_quantity, order_price)
values(
    (select order_id from orders where  order_id =10),
    (select resource_id from resource where resource_id = 4),
    6,
    120  
);

---------------------------------------
-- start of reserves

-- reserves id 1
insert into reserves(userid)
values(
    (select userid from users_table where username = 'annaprentice')
);

-- reserves id 2
insert into reserves(userid)
values(
    (select userid from users_table where username = 'juliatorres')
);

-- reserves id 3
insert into reserves(userid)
values(
   (select userid from users_table where username = 'carlitos')
);

-- reserves id 4
insert into reserves(userid)
values(
    (select userid from users_table where username = 'annaprentice')
);


--reserved_resources 
insert into reserved_resources(reserve_id,resource_id,resources_quantity)
values(
    (select reserve_id from reserves where reserve_id = 1),
    (select resource_id from resource where resource_id = 2),
    14
);

insert into reserved_resources(reserve_id,resource_id,resources_quantity)
values(
    (select reserve_id from reserves where reserve_id = 1),
    (select resource_id from resource where resource_id = 5),
    10
);

insert into reserved_resources(reserve_id,resource_id,resources_quantity)
values(
    (select reserve_id from reserves where reserve_id = 2),
    (select resource_id from resource where resource_id = 2),
    49
);

insert into reserved_resources(reserve_id,resource_id,resources_quantity)
values(
    (select reserve_id from reserves where reserve_id = 3),
    (select resource_id from resource where resource_id = 2),
    100
);
insert into reserved_resources(reserve_id,resource_id,resources_quantity)
values(
    (select reserve_id from reserves where reserve_id = 4),
    (select resource_id from resource where resource_id = 2),
    293
);

insert into reserved_resources(reserve_id,resource_id,resources_quantity)
values(
    (select reserve_id from reserves where reserve_id = 4),
    (select resource_id from resource where resource_id = 5),
    34
);
------------ end of reserves
--------------------------------------------------------------