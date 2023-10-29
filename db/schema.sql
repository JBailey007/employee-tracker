DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;
-- company table
CREATE TABLE company (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(100) NOT NULL
);
-- department table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (company_id)
    REFERENCES company(id)
    ON DELETE SET NULL
);
-- roles table
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
-- employees table
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    roles_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

