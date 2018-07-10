const db = require('../db/config.index');

function fetchAllCurricula(cb) {
  return db.many('Select * from curricula')
    .then(data => {
      cb(null, data);
    })
    .catch(cb);
}

function fetchCurriculaById(id) {
  return db.one(`Select * from curricula where id = $1`, [id])
}

function fetchCurriculaByUserId(id) {
  return db.many(`Select curricula.title, curricula.description
  from curricula join users on curricula.id = users.curricula_id
  where users.id = $1`, [id])
}

module.exports = { fetchAllCurricula, fetchCurriculaById, fetchCurriculaByUserId, fetchCurriculaByUserId };