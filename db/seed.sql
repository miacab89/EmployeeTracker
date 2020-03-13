
USE employee_trackerDB;

INSERT into department (name) VALUES ("Jazz");
INSERT into department (name) VALUES ("Hip-Hop");
INSERT into department (name) VALUES ("Metal");
INSERT into department (name) VALUES ("Dream Pop");

INSERT into role (title, salary, department_id) VALUES ("Rhythm Design", 500000, 1);
INSERT into role (title, salary, department_id) VALUES ("Harmony Conductor", 50000, 1);
INSERT into role (title, salary, department_id) VALUES ("Jazz Lead", 900000, 1);
INSERT into role (title, salary, department_id) VALUES ("Beat Design", 500000, 2);
INSERT into role (title, salary, department_id) VALUES ("Lyrical Creative", 500000, 2);
INSERT into role (title, salary, department_id) VALUES ("MVP", 90000, 2);
INSERT into role (title, salary, department_id) VALUES ("Blast Beat Annihilator", 50000, 3);
INSERT into role (title, salary, department_id) VALUES ("Riff Lord", 50000, 3);
INSERT into role (title, salary, department_id) VALUES ("Necromancer", 9000000, 3);
INSERT into role (title, salary, department_id) VALUES ("Dream Weaver", 50000, 4);
INSERT into role (title, salary, department_id) VALUES ("Synth Summoner", 50000, 4);
INSERT into role (title, salary, department_id) VALUES ("Angel Voice", 90000, 4);


INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Duke", "Ellington", 1, 1, 1);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Nina", "Simon", 2, 1, 1);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Timothy", "Mosley", 3 , 2, 2);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("MF", "Doom", 4, 2, 2);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Derek", "Roddy", 5, 3, 3);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Michael", "Hoggard", 6, 3, 3);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Robin", "Guthrie", 7, 4, 4);
INSERT into employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Simon", "Raymonde", 8, 4, 4);

INSERT into managers (first_name, last_name, role_id, employees_id) VALUES ("Tupac", "Shakur", 9, 1);
INSERT into managers (first_name, last_name, role_id, employees_id) VALUES ("Miles", "Davis", 10, 2);
INSERT into managers (first_name, last_name, role_id, employees_id) VALUES ("Rodney", "Dio", 11, 3);
INSERT into managers (first_name, last_name, role_id, employees_id) VALUES ("Elizabeth", "Fraser", 12, 4);
