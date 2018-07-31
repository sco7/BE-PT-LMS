const { fetchAllCurricula, fetchCurriculaById, fetchCurriculaByUserId, sendCurricula, removeCurriculaById } = require('../models/api.curricula.model');

function getAllCurricula(req, res) {
    fetchAllCurricula()
        .then(data => {
            return res.status(200).send({ Curricula: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Curricula' });
        })
  }

function getCurriculaById(req, res) {
  const id = req.params.id
  fetchCurriculaById(id)
      .then(data => {
          return res.status(200).send({ Curricula: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Curricula' });
      })
}

function getCurriculaByUserId(req, res) {
  const id = req.params.id
  fetchCurriculaByUserId(id)
      .then(data => {
          return res.status(200).send({ Curricula: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Curricula' });
      })
}

function postCurricula(req, res) {
    const body = req.body
    sendCurricula(body)
        .then(data => {
            return res.status(200).send({ Curricula: data });
        })
        .catch(err => {
            return res.status(500).send({ error: err });
        })
}

function deleteCurriculaById(req, res) {
    const id = req.params.id
    removeCurriculaById(id)
        .then(data => {
            return res.status(200).send({ message: 'The Curricula has been removed from the database' });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find the Curricula' });
        })
}

module.exports = { getAllCurricula, getCurriculaById, getCurriculaByUserId, postCurricula, deleteCurriculaById };