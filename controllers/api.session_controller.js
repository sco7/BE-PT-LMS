const { fetchAllSessions, fetchSessionById, fetchSessionsByUserId, fetchSessionsByUserIdAndStatus, sendSession, removeSessionById, completeSessionById } = require('../models/api.session.model');

function getAllSessions(req, res) {
    fetchAllSessions()
        .then(data => {
            return res.status(200).send({ Sessions: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Sessions' });
        })
  }

// function getAllSessions(req, res) {
//     fetchAllSessions((err, data) => {
//       if (err) return res.status(500).send(err);
//       else res.status(200).send({ Sessions: data });
//       });
// }

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

  function postSession(req, res) {
    const body = req.body
    sendSession(body)
        .then(data => {
            return res.status(200).send({ Session: data });
        })
        .catch(err => {
            return res.status(500).send({ error: err });
        })
}

function deleteSessionById(req, res) {
    const id = req.params.id
    removeSessionById(id)
        .then(data => {
            return res.status(200).send({ message: 'The Session has been removed from the database' });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find the Session' });
        })
}

function putSessionById(req, res) {
    const id = req.params.id
    completeSessionById(id)
        .then(data => {
            return res.status(200).send({ message: 'The Session has been completed' });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find the Session' });
        })
}

module.exports = { getAllSessions, getSessionsById, getSessionsByUserId, getSessionsByUserIdAndStatus, postSession, deleteSessionById, putSessionById };