const db = require('../db/config.index');

function fetchAllUsers(cb) {
  return db.many('Select * from users')
    .then(data => {
      cb(null, data);
    })
    .catch(cb);
}

function fetchUserById(id) {
  return db.one(`Select * from users where id = $1`, [id])
}

function sendUser(body) {
  return db.one(`Insert into users (account_type, first_name, last_name, job_title, gender, username, curricula_id) values ($1, $2, $3, $4, $5, $6, $7) returning *`, [body.account_type, body.first_name, body.last_name, body.job_title, body.gender, body.username, body.curricula_id])
}

function removeUserById(id) {
  return db.one(`delete from users where users.id = $1 returning *`, [id])
}

function fetchUserByUsername(username) {
  return db.one(`Select * from users where username = $1`, [username])
}

module.exports = { fetchAllUsers, fetchUserById, sendUser, removeUserById, fetchUserByUsername };