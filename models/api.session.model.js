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

module.exports = { fetchAllSessions, fetchSessionById };