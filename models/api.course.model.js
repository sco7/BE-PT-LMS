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

module.exports = { fetchAllCourses, fetchCourseById, fetchCoursesByUserId, fetchCoursesByCurriculaId };
