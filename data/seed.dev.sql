DROP DATABASE IF EXISTS lms_dev;
CREATE DATABASE lms_dev;

\c lms_dev;

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
VALUES 
('Basic Package', 'Covers the basic mandatory training requirements for general office employees'),
('Advanced Package', 'Covers additional training requirements for selected employees'), 
('Engineering Package', 'Contains additional training requirements for engineering employees'),
('Technical Package', 'Contains additional training requirements for technical employees'),
('Management Package', 'Contains additional training requirements for management employees');

INSERT INTO users (account_type, first_name, last_name, job_title, gender, username, curricula_id)
VALUES 
('Admin', 'Scott', 'Townson', 'Systems', 'M', 'scott001', 1), 
('User', 'John', 'Clayton', 'Finance', 'M', 'johns001', 1),
('User', 'Charlotte', 'Jackson', 'Health & Safety', 'F', 'charl001', 2), 
('User', 'Stephen', 'Brodie', 'Engineering', 'M', 'steph001', 3),
('User', 'Ian', 'Smith', 'Engineering', 'M', 'iansm001', 3), 
('User', 'James', 'Fish', 'Enginnering', 'M', 'james001', 3), 
('User', 'David', 'Brodie', 'Enginnering', 'M', 'david001', 3),
('User', 'Deborah', 'Ashworth', 'Quality Control', 'F', 'debor001', 3), 
('User', 'Emma', 'Atkins', 'Admin', 'F', 'emmaa001', 1), 
('User', 'Kellie', 'Barclay', 'IT', 'F', 'kelli001', 1), 
('User', 'John', 'Barnes', 'Stores', 'M', 'johnb001', 1), 
('User', 'Louise', 'Barnett', 'Sales', 'F', 'louis001', 2), 
('User', 'Julie', 'Birks', 'Sales', 'F', 'julie001', 2), 
('User', 'Christine', 'Bowie', 'Marketing', 'F', 'christ001', 1), 
('User', 'Rebecca', 'Bradbury', 'Despatch', 'F', 'rebec001', 1), 
('User', 'Sheila', 'Brodie', 'Buyer', 'F', 'sheil001', 2), 
('User', 'Philip', 'Brookes', 'Human Resources', 'M', 'phili001', 2),
('User', 'Cecil', 'Smithson', 'MD', 'M', 'cecil001', 5), 
('User', 'Raymond', 'Coggin', 'Tecnhical Support', 'M', 'raymo001', 4), 
('User', 'Joseph', 'Klass', 'Designer', 'M', 'josep001', 4), 
('User', 'James', 'Donovan', 'Designer', 'M', 'james002', 4), 
('User', 'Graham', 'Heaton', 'Designer', 'M', 'graha001', 4),
('User', 'Charles', 'Dowson', 'Engineering Manager', 'M', 'charl001', 5), 
('User', 'Catherine', 'Golding', 'Sales Manager', 'F', 'cathe001', 5), 
('User', 'Rupert', 'Harris', 'General Manager', 'M', 'ruper001', 5);

INSERT INTO courses (title, description, curricula_id)
VALUES 



INSERT INTO sessions (start_date, start_time, duration_hours, location, completed_status, course_id, user_id)
VALUES ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 2, 3), ('2016-05-05', '10:00:00', 4, 'Training Room A', 'Completed', 3, 3), ('2018-10-08', '10:00:00', 4, 'Training Room A', 'Not started', 1, 2);