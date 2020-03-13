
DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB; 

USE employee_trackerDB; 


CREATE TABLE department (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (30) NOT NULL
); 



CREATE TABLE role (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);



CREATE TABLE employees (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NULL,
department_id INT NOT NULL,
manager_id INT NULL,
CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
); 



CREATE TABLE managers (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NULL,
employees_id INT NULL,
CONSTRAINT fk_employees FOREIGN KEY (employees_id) REFERENCES employees(id)
); 

SELECT * FROM managers;
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employees;



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password1234'
