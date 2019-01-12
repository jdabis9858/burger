DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INTEGER(30) AUTO_INCREMENT NOT NULL,
    burger VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL
);

 SELECT * FROM burgers;