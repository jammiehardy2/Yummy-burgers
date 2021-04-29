DROP DATABASE IF EXISTS Burger_db;
CREATE DATABASE Burger_db;

USE Burger_db;

CREATE TABLE burgers
(
    id int
    auto_increment not null,
	burger_name varchar(255) not null,
	devoured boolean default false,
	primary key(id)
);
