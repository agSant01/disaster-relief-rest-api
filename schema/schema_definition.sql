create extension pgcrypto;

create table senate_region (
    senate_region_id serial not null,
    senate_region_name varchar(40) not null unique,
    primary key (senate_region_id)
);

create table city (
    cityid serial not null,
    city_name varchar(40) not null unique,
    city_senate_region integer not null,
    foreign key (city_senate_region) references senate_region(senate_region_id),
    primary key (cityid)
);

create table country (
    country_id serial not null,
    country_name varchar(40) not null unique,
    primary key (country_id)
);

create table roles (
    role_id serial not null,
    role_name text not null,
    role_description text not null,
    primary key (role_id)
);

create table users_table (
    userid serial not null,
    username varchar(20) not null unique,
    user_password text not null,
    first_name varchar(40) not null,
    last_name varchar(40) not null,
    date_of_birth date not null,
    street1 varchar(60) not null,
    street2 varchar(60) null,
    city integer not null,
    zip_code VARCHAR(10) not null,
    country_id integer not null,
    gender varchar(10) not null,
    email varchar(80) not null unique,
    phone_number varchar null,
    is_enabled boolean not null default true,
    role_id integer not null,
    creation_timestamp timestamptz default transaction_timestamp() not null,
    primary key (userid),
    foreign key (country_id) references country(country_id),
    foreign key (city) references city(cityid),
    foreign key (role_id) references roles(role_id)
);

create table organization (
    organization_id serial not null,
    organization_name varchar(40) not null unique,
    organization_manager_id integer references users_table(userid) not null,
    street1 varchar(60) not null,
    street2 varchar(60) null,
    city integer not null,
    zip_code VARCHAR(10) not null,
    country_id integer not null,
    phone_number varchar null,
    email varchar(80) not null unique,
    is_enabled boolean not null default true,
    creation_timestamp timestamptz default transaction_timestamp() not null,
    primary key (organization_id),
    foreign key (country_id) references country(country_id),
    foreign key (city) references city(cityid)
);

create table organization_representative(
    userid integer not null references users_table(userid),
    organization_id integer not null references organization(organization_id),
    primary key (userid, organization_id)
);

create table delivery_method (
    delivery_method_id serial not null,
    method_name varchar(20) not null,
    primary key (delivery_method_id)
);

create table resource_type(
    resource_type_id serial not null,
    resource_type_name varchar(40) unique not null,
    primary key (resource_type_id)
);

-- resource attributes allowed
create table resource_attribute_definition(
    resource_attribute_id serial not null, 
    resource_type_id integer references resource_type(resource_type_id) not null,
    resource_type_field_name varchar(40) not null,
    resource_type_field_value varchar(40) null,
    primary key (resource_attribute_id)
); 

create table resource_status(
    resource_status_id serial not null,
    resource_status_name varchar(20) not null,
    resource_status_description text not null,
    primary key (resource_status_id)
);

create table resource (
    resource_id serial not null,
    resource_quantity integer not null,
    resource_location_latitude float not null,
    resource_location_longitude float not null,
    resource_type_id integer references resource_type(resource_type_id),
    resource_status_id integer references resource_status(resource_status_id) not null,
    senate_region_id integer references senate_region(senate_region_id) not null,
    primary key (resource_id)
);

create table resource_attribute(
    resource_type_field_value varchar(40) not null,
    resource_type_field_name varchar(40) not null,
    resource_id integer references resource(resource_id) not null
);

create table submits_resource(
    resource_id integer references resource(resource_id) not null,
    userid integer references users_table(userid) not null,
    resource_price real not null,
    is_for_sale boolean not null,
    delivery_method_id integer references delivery_method(delivery_method_id) not null,
    date_submitted timestamptz default transaction_timestamp() not null,
    primary key(resource_id, userid)
);


create table payment_method(
    payment_method_id serial not null,
    payment_method_name varchar(40) not null,
    primary key (payment_method_id)
);

create table orders(
    order_id serial not null,
    resource_quantity integer not null,
    order_price real not null,
    userid integer references users_table(userid) not null,
    resource_id integer references resource(resource_id) not null,
    order_timestamp timestamptz default transaction_timestamp() not null,
    payment_method_id integer references payment_method(payment_method_id) not null,
    primary key (order_id)
);

create table reserves(
    reserve_id serial not null,
    userid integer references users_table(userid) not null,
    resource_id integer references resource(resource_id) not null,
    quantity integer not null,
    date_reserved timestamptz default transaction_timestamp() not null,
    primary key (reserve_id)
);

create table request_status (
    request_status_id serial not null,
    request_status_name varchar(20) not null,
    request_status_description text not null,
    primary key (request_status_id)
);

create table request (
    request_id serial not null,
    resource_id integer references resource(resource_id) not null,
    request_status integer references request_status(request_status_id) not null,
    userid integer references users_table(userid) not null,
    request_status_id timestamptz default transaction_timestamp() not null,
    primary key (request_id)
);

create table request_transactions(
    request_id integer references request(request_id) not null,
    resource_id integer references resource(resource_id) not null,
    transaction_quantity integer not null,
    transaction_date timestamptz default transaction_timestamp() not null
);