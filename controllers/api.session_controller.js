const { fetchAllSessions, fetchSessionById } = require('../models/api.session.model');

function getAllSessions(req, res) {
    fetchAllSessions((err, data) => {
      if (err) return res.status(500).send(err);
      else res.status(200).send({ Sessions: data });
      });
}

function getSessionsById(req, res) {
  const id = req.params.id
  fetchSessionById(id)
      .then(data => {
          return res.status(200).send({ Sessions: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Sessions' });
      })
}

module.exports = { getAllSessions, getSessionsById };