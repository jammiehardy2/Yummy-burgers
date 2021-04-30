DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger
(
    id int
    auto_increment not null,
	burger_name varchar(255) not null,
	devoured boolean default false,
	primary key(id)
);
