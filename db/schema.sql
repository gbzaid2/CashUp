DROP DATABASE IF EXISTS cashup;

CREATE DATABASE cashup;

USE cashup;


CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  target int,
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

INSERT INTO categories (id, name) VALUES (1, "FOOD");
INSERT INTO categories (id, name) VALUES (2, "ENTERTAINMENT");
INSERT INTO categories (id, name) VALUES (3, "FUN");
INSERT INTO categories (id, name) VALUES (4, "GROCERIES");
INSERT INTO categories (id, name) VALUES (5, "SHOPPING");


INSERT INTO transactions (id, amount, description, date, category_id) VALUES (1, 4.55, "STARBUCKS", "2017-08-02", 1);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (2, 9.19, "CHIPOTLE", "2017-08-02", 1);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (3, 13.29, "Express", "2017-08-03", 5);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (4, 329.87, "SHOPRITE", "2017-08-05", 4);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (5, 18.45, "MIKKELLER", "2017-08-05", 3);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (6, 4.55, "CHAI BAR", "2017-08-06", 3);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (7, 10.45, "POPSONS", "2017-08-07", 2);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (8, 5.23, "SHARETEA", "2017-08-08", 2);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (9, 138.94, "VERIZON", "2017-08-08", 1);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (10, 10.71, "NETFLIX", "2017-08-09", 3);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (11, 3.00, "STARBUCKS", "2017-08-10", 1);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (12, 13.48, "PICA PICA", "2017-08-11", 3);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (13, 52.83, "LITTLE STAR", "2017-08-12", 4);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (14, 427.48, "APPLE", "2017-08-14", 5);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (15, 38.51, "TRADER JOES", "2017-08-15", 1);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (16, 4.55, "Express", "2017-08-15", 5);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (17, 9.99, "SPOTIFY", "2017-08-17", 2);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (18, 3.85, "STARBUCKS", "2017-08-20", 1);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (19, 18.00, "AMC", "2017-08-21", 2);
INSERT INTO transactions (id, amount, description, date, category_id) VALUES (20, 11.42, "TARGET", "2017-08-22", 5);