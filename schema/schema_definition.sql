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
)

create table users_table (
    userid serial not null,
    username varchar(20) not null unique,
    user_password text not null,
    first_name varchar(40) not null,
    last_name varchar(40) not null, 
    date_of_birth date not null,
    street1 varchar(60) not null,
    street2 varchar(60) not null,
    city integer not null,
    zip_code integer not null,
    country_id integer not null, 
    gender varchar(10) not null,
    email varchar(80) not null unique,
    phone_number integer null,
    is_enabled boolean not null default true,
    role_id integer not null,
    creation_timestamp timestamp without time zone default localtimestamp not null,
    primary key (userid),
    foreign key (country_id) references country(country_id),
    foreign key (city) references city(cityid),
    foreign key (role_id) references roles(role_id) 
); 

create table organization (
    organization_id serial not null,
    organization_name varchar(40) not null unique, 
    organization_manager_id integer not null,
    street1 varchar(60) not null,
    street2 varchar(60) null,
    city integer not null,
    zip_code integer not null,
    country_id integer not null,
    phone_number integer null,
    email varchar(80) not null unique,
    is_enabled boolean not null default true,
    creation_timestamp  timestamp without time zone default localtimestamp not null,
    primary key (organization_id),
    foreign key (country_id) references country(country_id),
    foreign key (city) references city(cityid),
    foreign key organization_manager_id references users_table(userid)
);

create table organization_represenative(
    organization_represenative_id integer not null references users_table(userid),
    organization_id integer not null references organization(organization_id),
    primary key (organization_represenative_id, organization_id)    
);

create table delivery_method (
    method_id serial not null,
    method_name varchar(20) not null,
    primary key (method_id)
);