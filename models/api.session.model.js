const db = require('../db/config.index');

function fetchAllSessions() {
  return db.many(`Select * from curricula 
  join courses on courses.curricula_id = curricula.id
  join users on users.curricula_id = curricula.id
  join sessions on sessions.user_id = users.id and sessions.course_id = courses.id
  order by sessions.start_date desc`)
}

// function fetchAllSessions() {
//   return db.many(`Select * from sessions join courses on sessions.course_id = courses.id 
//   join users on sessions.user_id = users.id order by sessions.start_date desc`)
// }

// function fetchAllSessions(cb) {
//   return db.many('Select * from sessions')
//     .then(data => {
//       cb(null, data);
//     })
//     .catch(cb);
// }

function fetchSessionById(id) {
  return db.one(`Select * from sessions
   where id = $1`, [id])
}

function fetchSessionsByUserId(id) {
  return db.many(`Select * from sessions
  join users on sessions.user_id = users.id
   where users.id = $1`, [id])
}

function fetchSessionsByUserIdAndStatus(id, status) {
  return db.many(`Select * from sessions
  join users on sessions.user_id = users.id
   where users.id = $1 and sessions.completed_status = $2`, [id, status])
}

function sendSession(body) {
  return db.one(`Insert into sessions (start_date, start_time, duration_hours, location, completed_status, course_id, user_id) values ($1, $2, $3, $4, $5, $6, $7) returning *`, [body.start_date, body.start_time, body.duration_hours, body.location, body.completed_status, body.course_id, body.user_id])
}

function removeSessionById(id) {
  return db.one(`delete from sessions where sessions.id = $1 returning *`, [id])
}

function completeSessionById(id) {
  return db.one(`update sessions set completed_status = 'Completed' where sessions.id = $1 returning *`, [id])
}

module.exports = { fetchAllSessions, fetchSessionById, fetchSessionsByUserId, fetchSessionsByUserIdAndStatus, sendSession, removeSessionById, completeSessionById };