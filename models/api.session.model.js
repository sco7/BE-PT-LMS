const db = require('../db/config.index');

function fetchAllSessions(cb) {
  return db.many('Select * from sessions')
    .then(data => {
      cb(null, data);
    })
    .catch(cb);
}

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

module.exports = { fetchAllSessions, fetchSessionById, fetchSessionsByUserId, fetchSessionsByUserIdAndStatus };