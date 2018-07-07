DROP DATABASE IF EXISTS lms_test;
CREATE DATABASE lms_test;

\c lms_test;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  account_type VARCHAR (15) NOT NULL,
  first_name VARCHAR (15) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  job_title VARCHAR (30),
  gender VARCHAR (6) NOT NULL,
  username VARCHAR (10) NOT NULL,
  jobcode VARCHAR (15) 
);

CREATE TABLE curricula (
  id SERIAL PRIMARY KEY,
  curricula_id VARCHAR (20) NOT NULL,
  title VARCHAR (35) NOT NULL,
  curricula_description VARCHAR (150),
  FOREIGN KEY (jobcode) REFERENCES users(jobcode)
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  FOREIGN KEY (curricula_id) REFERENCES curricula(curricula_id),
  title VARCHAR (35),
  course_description VARCHAR (150)
);

CREATE TABLE sessions (
   id SERIAL PRIMARY KEY,
   session_id INT NOT NULL,
   FOREIGN KEY (course_id) REFERENCES courses(course_id),
   session_date DATE NOT NULL,
   session_time TIME NOT NULL,
   session_location VARCHAR (25) NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(user_id),
   completed_status VARCHAR (15)
);