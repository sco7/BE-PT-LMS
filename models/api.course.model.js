const db = require('../db/config.index');

function fetchAllCourses(cb) {
  return db.many('Select * from courses')
    .then(data => {
      cb(null, data);
    })
    .catch(cb);
}

function fetchCourseById(id) {
  return db.one(`Select * from courses where id = $1`, [id])
}

function fetchCoursesByUserId(id) {
  return db.many(`Select courses.description, curricula.title
  from ((courses 
  inner join curricula on courses.curricula_id = curricula.id)
  inner join users on curricula.id = users.curricula_id) 
  where users.id = $1`, [id])
}

function fetchCoursesByCurriculaId(id) {
  return db.many(`Select courses.title, courses.description
  from courses join curricula on curricula.id = courses.curricula_id
  where curricula.id = $1`, [id])
}

function fetchCoursesByUserIdAndStatus(id, status) {
  return db.many(`Select courses.title, courses.description
  from ((courses 
  inner join sessions on courses.id = sessions.course_id)
  inner join users on sessions.user_id = users.id)
  where users.id = $1 and sessions.completed_status = $2`, [id, status])
}

function sendCourse(body) {
  return db.one(`Insert into courses (title, description, curricula_id ) VALUES ($1, $2, $3) returning *`, [body.title, body.description, body.curricula_id])
}

function removeCourseById(id) {
  return db.one(`delete from courses where courses.id = $1 returning *`, [id])
}

module.exports = { fetchAllCourses, fetchCourseById, fetchCoursesByUserId, fetchCoursesByCurriculaId, fetchCoursesByUserIdAndStatus, sendCourse, removeCourseById };

