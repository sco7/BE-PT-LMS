const { fetchAllCurricula, fetchCurriculaById, fetchCurriculaByUserId } = require('../models/api.curricula.model');

function getAllCurricula(req, res) {
  fetchAllCurricula((err, data) => {
      if (err) return res.status(500).send(err);
      else res.status(200).send({ Curricula: data });
      });
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

module.exports = { getAllCurricula, getCurriculaById, getCurriculaByUserId };