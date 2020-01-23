DROP DATABASE IF EXISTS cashup;

CREATE DATABASE cashup;

USE cashup;


CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  target int,
  current int,
  PRIMARY KEY (ID)
);

CREATE TABLE transactions (
  id int NOT NULL AUTO_INCREMENT,
  date VARCHAR(50) NOT NULL,
  amount decimal(10, 2) NOT NULL,
  description varchar(50) NOT NULL,
  category_id int,
  PRIMARY KEY (ID),
  FOREIGN KEY (category_id) REFERENCES categories(ID)
);
