-- insert admin
INSERT INTO users (email, password) VALUES (
  'system@admin.com',
  crypt('password123', gen_salt('bf'))
);

-- insert senatorial regions
insert into senate_region(senate_region_name) values('I - San Juan');
insert into senate_region(senate_region_name) values('II - Bayamon');
insert into senate_region(senate_region_name) values('III Arecibo');
insert into senate_region(senate_region_name) values('IV - Mayagüez-Aguadilla');
insert into senate_region(senate_region_name) values('V - Ponce');
insert into senate_region(senate_region_name) values('VI - Guayama');
insert into senate_region(senate_region_name) values('VI - Humacao');
insert into senate_region(senate_region_name) values('VII - Carolina');