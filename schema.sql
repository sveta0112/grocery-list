-- create database grocery_list (drop if exists)
DROP DATABASE IF EXISTS grocery_list;
CREATE database grocery_list;
-- use grocery_list database
USE grocery_list;
-- create table with cols id, item, quantity
CREATE TABLE groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item TEXT,
  quantity INT
);
-- insert three test values
INSERT INTO groceries (item, quantity) VALUES ("pizza", 5), ("cheese", 1), ("ice cream", 10);

