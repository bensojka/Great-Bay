DROP DATABASE IF EXISTS great_bayDB;

CREATE DATABASE great_bayDB;

USE great_bayDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  itemuser VARCHAR(70) NULL,
  item VARCHAR(70) NULL,
  listprice DECIMAL(10,2) NULL,
  bidprice decimal(10,2) NULL,
  highbiduser VARCHAR(70) NULL,
  closedOrOpen VARCHAR(70) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, listprice)
VALUES ("George Brett autographed baseball", 100.00);

INSERT INTO products (item, listprice)
VALUES ("Kareem Hunt Replica Jersey", 75.00);

INSERT INTO products (item, listprice)
VALUES ("World Series Tickets", 10.00);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);