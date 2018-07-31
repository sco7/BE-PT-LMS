const db = require('../db/config.index');

function fetchAllCurricula() {
  return db.many('Select * from curricula')
}

function fetchCurriculaById(id) {
  return db.one(`Select * from curricula where id = $1`, [id])
}

function fetchCurriculaByUserId(id) {
  return db.many(`Select curricula.title, curricula.description
  from curricula join users on curricula.id = users.curricula_id
  where users.id = $1`, [id])
}

function sendCurricula(body) {
  return db.one(`Insert into curricula (title, description) values ($1, $2) returning *`, [body.title, body.description])
}

function removeCurriculaById(id) {
  return db.one(`delete from curricula where curricula.id = $1 returning *`, [id])
}

module.exports = { fetchAllCurricula, fetchCurriculaById, fetchCurriculaByUserId, fetchCurriculaByUserId, sendCurricula, removeCurriculaById };