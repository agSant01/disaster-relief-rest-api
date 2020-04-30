CREATE EXTENSION pgcrypto;

create table senate_region (
    senate_region_id SERIAL NOT NULL,
    senate_region_name VARCHAR(40) NOT NULL,
    PRIMARY KEY (senate_region_id)
);

create table city (
    cityid serial not null,
    city_name varchar(40) not null,
    city_abbreviation varchar(3) NOT NULL,
    city_senate_region integer not null,
    foreign key (city_senate_region) references senate_region(senate_region_id),
    primary key (cityid)
);

create table country (
    country_id SERIAL NOT NULL,
    contry_name VARCHAR(40) NOT NULL
);

create table users_table (
    userid serial not null,
    username varchar(20) not null,
    user_password TEXT not null,
    first_name varchar(40) not null,
    last_name varchar(40) not null, 
    date_of_birth date not null,
    street1 varchar(60) not null,
    street2 varchar(60) not null,
    city integer not null,
    zip_code integer not null,
    country integer not null, 
    gender varchar(10) not null,
    email varchar(80) not null UNIQUE,
    is_enabled boolean not null,
    creation_timestamp timestamptz default localtimestamp not null,
    primary key (userid),
    foreign key (city) references city(cityid),
    foreign key (country) references country(country_id)
); 