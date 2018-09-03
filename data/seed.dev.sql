DROP DATABASE IF EXISTS lms_dev;
CREATE DATABASE lms_dev;
\c lms_dev;

CREATE TABLE curricula
(
  id SERIAL PRIMARY KEY,
  title VARCHAR (35) NOT NULL,
  description VARCHAR (150)
);

CREATE TABLE users
(
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

CREATE TABLE courses
(
  id SERIAL PRIMARY KEY,
  title VARCHAR (35),
  description VARCHAR (150),
  curricula_id INT NOT NULL,
  FOREIGN KEY (curricula_id) REFERENCES curricula(id) on delete cascade
);

CREATE TABLE sessions
(
  id SERIAL PRIMARY KEY,
  start_date DATE,
  start_time TIME,
  duration_hours INT,
  location VARCHAR (25),
  completed_status VARCHAR (15),
  course_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id) on delete cascade,
  FOREIGN KEY (user_id) REFERENCES users(id) on delete cascade
);

INSERT INTO curricula
  (title, description)
VALUES
  ('Basic Package', 'Covers the basic mandatory training requirements for general office employees'),
  ('Advanced Package', 'Covers additional training requirements for selected employees'),
  ('Engineering Package', 'Contains additional training requirements for engineering employees'),
  ('Technical Package', 'Contains additional training requirements for technical employees'),
  ('Management Package', 'Contains additional training requirements for management employees');

INSERT INTO users
  (account_type, first_name, last_name, job_title, gender, username, curricula_id)
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
  ('User', 'Charles', 'Dowson', 'Engineering Manager', 'M', 'charl002', 5),
  ('User', 'Catherine', 'Golding', 'Sales Manager', 'F', 'cathe001', 5),
  ('User', 'Rupert', 'Harris', 'General Manager', 'M', 'ruper001', 5);

INSERT INTO courses
  (title, description, curricula_id)
VALUES
  ('Induction', 'Induction Training for new employees', 1),
  ('Induction', 'Induction Training for new employees', 2),
  ('Induction', 'Induction Training for new employees', 3),
  ('Induction', 'Induction Training for new employees', 4),
  ('Induction', 'Induction Training for new employees', 5),
  ('Fire Safety', 'Basic Fire safety Awareness training', 1),
  ('Fire Safety', 'Basic Fire safety Awareness training', 2),
  ('Fire Safety', 'Basic Fire safety Awareness training', 3),
  ('Fire Safety', 'Basic Fire safety Awareness training', 4),
  ('Fire Safety', 'Basic Fire safety Awareness training', 5),
  ('Teamwork Skills', 'Teamwork for all employees ', 1),
  ('Teamwork Skills', 'Teamwork for all employees ', 2),
  ('Teamwork Skills', 'Teamwork for all employees ', 3),
  ('Teamwork Skills', 'Teamwork for all employees ', 4),
  ('Teamwork Skills', 'Teamwork for all employees ', 5),
  ('First Aid', 'First training for all First Aiders', 2),
  ('Communication skills', 'Communication training for selected employees ', 2),
  ('Safe Driving', 'Training covering the key concepts of driving safely', 2),
  ('Welding', 'Training covering TIG and MIG welding', 3),
  ('Hoist Training', 'Training covering safe use of a hoist', 3),
  ('Forklift Truck Training', 'FLT training for all FLT operators', 3),
  ('Manual Handing', 'Practical manual handling training', 3),
  ('Safety in the work place', 'Advanced safety in the work place aimed at manual workers', 3),
  ('Advanced CAD', 'CAD training aimed at CAD Designers', 4),
  ('Innovation', 'Innovation workshop', 4),
  ('Product Workshop', 'Product Workshop aimed employees requiring advanced technical knowledge', 4),
  ('Leadership Skills', 'Leadership training for all managers', 5),
  ('Ethics', 'Ethics training', 5),
  ('Time Management', 'Time Management training aimed at managers', 5);

INSERT INTO sessions
  (start_date, start_time, duration_hours, location, completed_status, course_id, user_id)
VALUES
  ('2016-01-06', '09:00:00', 8, 'Training Room A', 'Completed', 1, 1),
  ('2018-02-06', '10:00:00', 4, 'Eng Office', 'Completed', 6, 1),
  ('2018-08-14', '09:00:00', 8, 'Training Centre', 'Not Started', 11, 1),
  ('2014-05-07', '09:00:00', 8, 'Training Room A', 'Completed', 1, 2),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 6, 2),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 11, 2),
  ('2018-01-03', '09:00:00', 8, 'Training Room A', 'Completed', 1, 9),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 6, 9),             
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 11, 9),
  ('2017-11-01', '09:00:00', 8, 'Training Room A', 'Completed', 1, 10),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 6, 10),
  ('2018-10-08', '09:00:00', 8, 'Training Centre', 'Not Started', 11, 10),
  ('2014-05-07', '09:00:00', 8, 'Training Room A', 'Completed', 1, 11),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 6, 11),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 11, 11),
  ('2018-01-30', '09:00:00', 8, 'Training Room A', 'Completed', 1, 14),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 6, 14),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 11, 14),
  ('2016-07-04', '09:00:00', 8, 'Training Room A', 'Completed', 1, 15),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 6, 15),
  ('2018-10-08', '09:00:00', 8, 'Training Centre', 'Not Started', 11, 15),
  ('2017-11-10', '09:00:00', 8, 'Training Room A', 'Completed', 2, 3),
  ('2018-06-02', '10:00:00', 4, 'Eng Office', 'Completed', 7, 3),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 12, 3),
  ('2016-09-20', '09:00:00', 8, 'Training Room A', 'Completed', 16, 3),
  ('2019-05-06', '10:00:00', 4, 'Training Room A', 'Not Started', 17, 3),
  ('2019-04-02', '14:00:00', 4, 'Training Room A', 'Not Started', 18, 3),
  ('2015-08-05', '09:00:00', 8, 'Training Room A', 'Completed', 2, 12),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 7, 12),
  ('2018-07-01', '09:00:00', 4, 'Training Centre', 'Completed', 12, 12),
  ('2016-09-20', '09:00:00', 8, 'Training Room A', 'Completed', 16, 12),
  ('2019-05-06', '10:00:00', 4, 'Training Room A', 'Not Started', 17, 12),
  ('2019-04-02', '14:00:00', 4, 'Training Room A', 'Not Started', 18, 12),
  ('2016-01-25', '09:00:00', 8, 'Training Room A', 'Completed', 2, 13),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 7, 13),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 12, 13),
  ('2016-09-20', '09:00:00', 8, 'Training Room A', 'Completed', 16, 13),
  ('2019-05-06', '10:00:00', 4, 'Training Room A', 'Not Started', 17, 13),
  ('2019-04-02', '14:00:00', 4, 'Training Room A', 'Not Started', 18, 13),
  ('2015-02-02', '09:00:00', 8, 'Training Room A', 'Completed', 2, 16),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 7, 16),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 12, 16),
  ('2016-09-20', '09:00:00', 8, 'Training Room A', 'Completed', 16, 16),
  ('2019-05-06', '10:00:00', 4, 'Training Room A', 'Not Started', 17, 16),
  ('2019-04-02', '14:00:00', 4, 'Training Room A', 'Not Started', 18, 16),
  ('2018-01-05', '09:00:00', 8, 'Training Room A', 'Completed', 2, 17),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 7, 17),
  ('2018-07-01', '09:00:00', 8, 'Training Centre', 'Completed', 12, 17),
  ('2018-09-20', '09:00:00', 8, 'Training Room A', 'Not Started', 16, 17),
  ('2019-05-06', '10:00:00', 4, 'Training Room A', 'Not Started', 17, 17),
  ('2018-12-01', '14:00:00', 4, 'Training Room A', 'Not Started', 18, 17),
  ('2016-02-09', '09:00:00', 8, 'Training Room A', 'Completed', 3, 4),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 8, 4),
  ('2018-04-08', '09:00:00', 8, 'Training Centre', 'Completed', 13 , 4),
  ('2017-06-17', '09:00:00', 8, 'Workshop', 'Completed', 19, 4),
  ('2016-05-09', '08:00:00', 8, 'Training Room A', 'Completed', 20, 4),
  ('2018-10-08', '10:00:00', 4, 'FLT Training Centre', 'Not Started', 21, 4),
  ('2018-05-11', '09:00:00', 4, 'Training Room A', 'Completed', 22, 4),
  ('2019-04-09', '09:00:00', 8, 'Training Room A', 'Not Started', 23, 4),
  ('2015-09-02', '09:00:00', 8, 'Training Room A', 'Completed', 3, 5),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 8, 5),
  ('2018-04-08', '09:00:00', 8, 'Training Centre', 'Completed', 13, 5),
  ('2017-07-12', '09:00:00', 4, 'Workshop', 'Completed', 19, 5),
  ('2015-10-09', '08:00:00', 8, 'Training Room A', 'Completed', 20, 5),
  ('2018-07-27', '10:00:00', 4, 'FLT Training Centre', 'Not Started', 21, 5),
  ('2018-05-11', '09:00:00', 4, 'Training Room A', 'Completed', 22, 5),
  ('2019-04-09', '09:00:00', 8, 'Training Room A', 'Not Started', 23, 5),
  ('2017-09-10', '09:00:00', 8, 'Training Room A', 'Completed', 3, 6),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 8, 6),
  ('2018-04-08', '09:00:00', 8, 'Training Centre', 'Completed', 13 , 6),
  ('2019-04-02', '09:00:00', 4, 'Workshop', 'Not Started', 19, 6),
  ('2018-10-09', '08:00:00', 8, 'FLT Training Centre', 'Not Started', 20, 6),
  ('2018-10-08', '10:00:00', 4, 'FLT Training Centre', 'Not Started', 21, 6),
  ('2018-05-11', '09:00:00', 4, 'Training Room A', 'Completed', 22, 6),
  ('2019-04-09', '09:00:00', 8, 'Training Room A', 'Not Started', 23, 6),
  ('2015-04-01', '09:00:00', 8, 'Training Room A', 'Completed', 3, 7),
  ('2018-06-02', '14:00:00', 4, 'Eng Office', 'Completed', 8, 7),
  ('2018-04-08', '09:00:00', 8, 'Training Centre', 'Completed', 13 , 7),
  ('2017-07-12', '09:00:00', 4, 'Workshop', 'Completed', 19, 7),
  ('2016-05-05', '10:00:00', 4, 'Training Room A', 'Completed', 20, 7),
  ('2018-10-08', '10:00:00', 4, 'FLT Training Centre', 'Not Started', 21, 7),
  ('2018-05-11', '09:00:00', 8, 'Training Room A', 'Completed', 22, 7),
  ('2019-04-09', '09:00:00', 8, 'Training Room A', 'Not Started', 23, 7),
  ('2018-01-08', '09:00:00', 8, 'Training Room A', 'Completed', 3, 8),
  ('2018-07-02', '10:00:00', 4, 'Eng Office', 'Completed', 8, 8),
  ('2018-04-08', '09:00:00', 8, 'Training Centre', 'Completed', 13 , 8),
  ('2019-04-02', '09:00:00', 4, 'Workshop', 'Not Started', 19, 8),
  ('2016-05-05', '09:00:00', 8, 'Training Room A', 'Completed', 20, 8),
  ('2019-10-08', '09:00:00', 8, 'FLT Training Centre', 'Not Started', 21, 8),
  ('2018-05-11', '09:00:00', 4, 'Training Room A', 'Completed', 22, 8),
  ('2019-04-09', '09:00:00', 8, 'Training Room A', 'Not Started', 23, 8),
  ('2018-10-08', '09:00:00', 8, 'Training Room A', 'Not Started', 4, 19),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 9, 19),
  ('2018-10-21', '09:00:00', 8, 'Training Centre', 'Not Started', 14, 19),
  ('2016-04-02', '09:00:00', 8, 'Design Office', 'Completed', 24, 19),
  ('2019-03-15', '09:00:00', 8, 'Training Room A', 'Not Started', 25, 19),
  ('2019-04-02', '09:00:00', 8, 'Training Room A', 'Not Started', 26, 19),
  ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 4, 20),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 9, 20),
  ('2018-10-21', '09:00:00', 8, 'Training Centre', 'Not Started', 14, 20),
  ('2016-04-02', '09:00:00', 8, 'Design Office', 'Completed', 24, 20),
  ('2019-03-15', '09:00:00', 8, 'Training Room A', 'Not Started', 25, 20),
  ('2019-04-02', '09:00:00', 8, 'Training Room A', 'Not Started', 26, 20),
  ('2018-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 4, 21),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 9, 21),
  ('2019-01-01', '09:00:00', 8, 'Training Centre', 'Not Started', 14, 21),
  ('2016-04-02', '09:00:00', 8, 'Design Office', 'Completed', 24, 21),
  ('2019-03-15', '09:00:00', 8, 'Training Room A', 'Not Started', 25, 21),
  ('2019-04-02', '09:00:00', 8, 'Training Room A', 'Not Started', 26, 21),
  ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 4, 22),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 9, 22),
  ('2018-10-21', '09:00:00', 8, 'Training Centre', 'Not Started', 14, 22),
  ('2017-04-02', '09:00:00', 8, 'Design Office', 'Completed', 24, 22),
  ('2019-03-15', '09:00:00', 8, 'Training Room A', 'Not Started', 25, 22),
  ('2019-04-02', '09:00:00', 8, 'Training Room A', 'Not Started', 26, 22),
  ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 5, 18),
  ('2016-04-02', '09:00:00', 4, 'Eng Office', 'Completed', 10, 18),
  ('2018-12-03', '10:00:00', 8, 'Training Centre', 'Not Started', 15, 18),
  ('2018-03-02', '09:00:00', 8, 'Training Room A', 'Completed', 27, 18),
  ('2016-04-02', '09:00:00', 2, 'Training Room A', 'Completed', 28, 18),
  ('2018-11-02', '14:00:00', 4, 'Cecils Office', 'Not Started', 29, 18),
  ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 5, 23),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 10, 23),
  ('2018-12-03', '10:00:00', 8, 'Training Centre', 'Not Started', 15, 23),
  ('2018-03-02', '09:00:00', 8, 'Training Room A', 'Completed', 27, 23),
  ('2016-04-02', '09:00:00', 2, 'Training Room A', 'Completed', 28, 23),
  ('2018-11-02', '14:00:00', 4, 'Cecils Office', 'Not Started', 29, 23),
  ('2016-04-02', '09:00:00', 8, 'Training Room A', 'Completed', 5, 24),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 10, 24),
  ('2018-12-03', '10:00:00', 8, 'Training Centre', 'Not Started', 15, 24),
  ('2018-03-02', '09:00:00', 8, 'Training Room A', 'Completed', 27, 24),
  ('2016-04-02', '09:00:00', 2, 'Training Room A', 'Completed', 28, 24),
  ('2018-11-02', '14:00:00', 4, 'Cecils Office', 'Not Started', 29, 24),
  ('2018-07-02', '09:00:00', 4, 'Eng Office', 'Completed', 10, 25),
  ('2018-06-02', '09:00:00', 8, 'Training Centre', 'Not Started', 15, 25),
  ('2018-03-02', '09:00:00', 8, 'Training Room A', 'Completed', 27, 25),
  ('2018-06-02', '09:00:00', 2, 'Training Room A', 'Completed', 28, 25),
  ('2018-11-02', '14:00:00', 4, 'Cecils Office', 'Not Started', 29, 25);