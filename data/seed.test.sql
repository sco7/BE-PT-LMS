DROP DATABASE IF EXISTS lms_test;
CREATE DATABASE lms_test;

\c lms_test;

CREATE TABLE curricula (
  id SERIAL PRIMARY KEY,
  title VARCHAR (35) NOT NULL,
  description VARCHAR (150)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  account_type VARCHAR (15) NOT NULL,
  first_name VARCHAR (15) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  job_title VARCHAR (30),
  gender VARCHAR (1) NOT NULL,
  username VARCHAR (10) NOT NULL,
  curricula_id INT NOT NULL,
  FOREIGN KEY (curricula_id) REFERENCES curricula(id)
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR (35),
  description VARCHAR (150),
  curricula_id INT NOT NULL,
  FOREIGN KEY (curricula_id) REFERENCES curricula(id) on delete cascade
);

CREATE TABLE sessions (
   id SERIAL PRIMARY KEY,
   start_date DATE NOT NULL,
   start_time TIME NOT NULL,
   duration_hours INT,
   location VARCHAR (25) NOT NULL,
   completed_status VARCHAR (15),
   course_id INT NOT NULL,
   user_id INT NOT NULL,
   FOREIGN KEY (course_id) REFERENCES courses(id) on delete cascade,
   FOREIGN KEY (user_id) REFERENCES users(id) on delete cascade
);

INSERT INTO curricula (title, description)
VALUES ('Basic Package', 'Contains basic training requirments'), ('Advanced Package', 'Contains advanced training requirments');

INSERT INTO users (account_type, first_name, last_name, job_title, gender, username, curricula_id)
VALUES ('Admin', 'Scott', 'Townson', 'System Admin', 'M', 'scott001', 1), ('User', 'John', 'Smith', 'Accounts', 'M', 'johns001', 1), ('User', 'Lisa', 'Jones', 'Team Leader', 'F', 'lisaj001', 2);

INSERT INTO courses (title, description, curricula_id)
VALUES ('Induction', 'Induction Training', 1), ('Induction', 'Induction Training', 2), ('Manager', 'Manager Training', 2);

INSERT INTO sessions (start_date, start_time, duration_hours, location, completed_status, course_id, user_id)
VALUES ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 2, 3), ('2016-05-05', '10:00:00', 4, 'Training Room A', 'Completed', 3, 3), ('2018-10-08', '10:00:00', 4, 'Training Room A', 'Not started', 1, 2);