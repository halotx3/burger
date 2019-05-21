CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    type VARCHAR(45),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);