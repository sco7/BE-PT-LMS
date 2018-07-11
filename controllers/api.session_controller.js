const { fetchAllSessions, fetchSessionById, fetchSessionsByUserId, fetchSessionsByUserIdAndStatus } = require('../models/api.session.model');

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

function getSessionsByUserId(req, res) {
    const id = req.params.id
    fetchSessionsByUserId(id)
        .then(data => {
            return res.status(200).send({ Sessions: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Sessions for User' });
        })
  }

  function getSessionsByUserIdAndStatus(req, res) {
    const id = req.params.id
    const status = req.params.status
    fetchSessionsByUserIdAndStatus(id, status)
        .then(data => {
            return res.status(200).send({ Sessions: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Sessions for User' });
        })
  }


module.exports = { getAllSessions, getSessionsById, getSessionsByUserId, getSessionsByUserIdAndStatus };