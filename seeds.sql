DROP DATABASE Employees;

CREATE DATABASE Employees;

USE Employees;

CREATE TABLE Department (
 department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
 department_name VARCHAR(30) NOT NULL
);

CREATE TABLE Roles (
  roles_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  salary INTEGER(30) NOT NULL
);

CREATE TABLE Employee(
  employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  employees VARCHAR(30) NOT NULL,
--   CREATED_BY varchar(40) DEFAULT '' not null,
  salary INTEGER(30) NOT NULL,
  manager VARCHAR(30) NOT NULL
);


USE Employees;

-- following is to check and can be removed
INSERT INTO Department (department_name)
VALUES 
('Accounting'),
('Payroll'),
('Legal'),
('Social Media'),
('Digital Media'),
('Web Developer');

-- following is to check and can be removed
INSERT INTO Roles (job_title, department_name, salary)
VALUES 
('Full Stack Web Developer','Web Development','55000'),
('Illustrator','Digital Media','48000'),
('Social Media Consultant','Social Media','52000'),
('Accounting Manager','Accounting','65000'),
('Payroll Consultant','Payroll','55000'),
('Corporate Law Consultant','Legal','54000');


INSERT INTO Employee (first_name, last_name, job_title, department_name, salary, manager)
VALUES 
('Andrew','Ogilivie','Full Stack Web Developer','Web Development','55000','Johnny'),
('Ashlee','Forese','Corporate Law Consultant','Legal','54000','Johnny'),
('Gisselle','Cordeiro','Payroll Consultant','Payroll','55000','Harmy'),
('Lauren','Martin','Social Media Consultant','Social Media','52000','Johnny'),
('Natisha','Perseud','Illustrator','Digital Media','48000','Johnny'),
('Vasily','Rybov','Accounting Manager','Accounting','65000','Harmy');


-- To enter values: INSERT INTO candidates (first_name, last_name, industry_connected)
-- VALUES ('Ronald', 'Firbank', 1);
-- To view all values: SELECT * FROM candidates;
-- To access SQL fil: mysql> source db/db.sql
-- To update: UPDATE candidates SET industry_connected = 1 WHERE id = 3;
-- To delete: DELETE FROM candidates WHERE first_name = "Montague";



-- "id Department, 1 Finance, 2 Legal, 3 Marketing, 4 Engineering, 5 Art, 6 Test");
