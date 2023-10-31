USE employeesDB;

INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Sales");


INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nolan", "Park", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Carter", "Matheson", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kyle", "Rind", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Bailey", 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Susan", "Styles", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Haubner", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Cooper", 4, 2);