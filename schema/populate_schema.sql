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
    city,
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

insert into organization (
    organization_name, 
    organization_manager_id,
    street1,
    city,
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

insert into organization_representative (
    organization_representative_id,
    organization_id
) values 
(
    (select userid from users_table where username = 'valeria'),
    (select organization_id from organization where organization_name = 'ICOM Helpers')
);


-- insert delivery methods
insert into delivery_method(method_name) values('Delivery');
insert into delivery_method(method_name) values('Pick-up');
insert into delivery_method(method_name) values('Delivery or Pick-up');

-- insert measurements
--Length
insert into measurement(unit_type) values('millimeter ');
insert into measurement(unit_type) values('centimeter');
insert into measurement(unit_type) values('meter');
insert into measurement(unit_type) values('kilometer');
insert into measurement(unit_type) values('inch');
insert into measurement(unit_type) values('yard');

--Volume and Capacity (Liquid and Dry)
insert into measurement(unit_type) values('milliliter');
insert into measurement(unit_type) values('liter');
insert into measurement(unit_type) values('U.S. fluid ounce');
insert into measurement(unit_type) values('U.S. gallon');

--Weight
insert into measurement(unit_type) values('milligram');
insert into measurement(unit_type) values('gram');
insert into measurement(unit_type) values('pound');
insert into measurement(unit_type) values('kilogram');
insert into measurement(unit_type) values('ounce');

--clothes
insert into measurement(unit_type) values('Small');
insert into measurement(unit_type) values('Medium');
insert into measurement(unit_type) values('Large');
insert into measurement(unit_type) values('30');
insert into measurement(unit_type) values('34');
insert into measurement(unit_type) values('36');

-- payment methods
insert into payment_method(payment_method_name) values('Credit Card');
insert into payment_method(payment_method_name) values('Debit');
insert into payment_method(payment_method_name) values('Cash');
insert into payment_method(payment_method_name) values('WIC');

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


--insert resource_attribute_definition
    --Water
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    "Water type",
    "Purified"
);  

insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    "Water type",
    "Distilled "
);   

insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Water'),
    "Expiration Date",
    "mm/dd/yyyy"
);


    -- Medications
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    "Medication type",
    "Probiotics"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    "Medication name",
    "Florajen"
);

insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    "Medication type",
    "Antipsychotics"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
    "Medication name",
    "Clozapine"
);

insert into resource_attribute_definition (    
resource_type_id,
resource_type_field_name,
resource_type_field_value
)
values(
(SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Medication'),
"Expiration Date",
"mm/dd/yyyy"
);


    -- Baby Food 
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),
    "Baby Food type",
    "Gerber"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),
    "Baby Food name",
    "Banana"
);

insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),
    "Baby Food type",
    "Ella’s Kitchen"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),
    "Baby Food name",
    "Carrot"
);

insert into resource_attribute_definition (    
resource_type_id,
resource_type_field_name,
resource_type_field_value
)
values(
(SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Baby Food'),
"Expiration Date",
"mm/dd/yyyy"
);
  

    --Canned Food
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    "Canned Food type",
    "Soups"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    "Canned Food name",
    "Campbell's Condensed Chicken Noodle Soup "
);

insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    "Canned Food type",
    "Fruits and Vegetables"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
    "Canned Food name",
    "Dole Crushed Pineapple"
);

insert into resource_attribute_definition (    
resource_type_id,
resource_type_field_name,
resource_type_field_value
)
values(
(SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Canned Food'),
"Expiration Date",
"mm/dd/yyyy"
);


    --Dry Food 
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),
    "Dry Food type",
    "Powdered eggs"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),
    "Dry Food name",
    "OvaEasy Powdered Whole Eggs"
);

insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),
    "Dry Food type",
    "Evaporated milk "
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),
    "Dry Food name",
    "Great Value Evaporated Milk"
);

insert into resource_attribute_definition (    
resource_type_id,
resource_type_field_name,
resource_type_field_value
)
values(
(SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Dry Food'),
"Expiration Date",
"mm/dd/yyyy"
);


    --Ice
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Ice'),
    "Ice type",
    "Ice cube"
);
insert into resource_attribute_definition (    
    resource_type_id,
    resource_type_field_name,
    resource_type_field_value
    )
values(
    (SELECT resource_type_id FROM resource_type WHERE resource_type_name ='Ice'),
    "Ice type",
    "Ice chips"
);