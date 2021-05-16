DROP DATABASE Employees;

CREATE DATABASE Employees;

USE Employees;

CREATE TABLE Department (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

-- following is to check and can be removed
INSERT INTO Department (department_name) 
VALUES 
('Legal'),
('Marketing'),
('Engineering'),
('Art'),
('Test2');

-- To enter values: INSERT INTO candidates (first_name, last_name, industry_connected)
-- VALUES ('Ronald', 'Firbank', 1);
-- To view all values: SELECT * FROM candidates;
-- To access SQL fil: mysql> source db/db.sql
-- To update: UPDATE candidates SET industry_connected = 1 WHERE id = 3;
-- To delete: DELETE FROM candidates WHERE first_name = "Montague";







-- "id Department, 1 Finance, 2 Legal, 3 Marketing, 4 Engineering, 5 Art, 6 Test");
