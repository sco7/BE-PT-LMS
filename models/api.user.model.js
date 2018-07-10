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

module.exports = { fetchAllUsers, fetchUserById };