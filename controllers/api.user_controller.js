const { fetchAllUsers, fetchUserById, sendUser, removeUserById, fetchUserByUsername } = require('../models/api.user.model');

function getAllUsers(req, res) {
  fetchAllUsers((err, data) => {
      if (err) return res.status(500).send(err);
      else res.status(200).send({ Users: data });
      });
}

function getUserById(req, res) {
  const id = req.params.id
  fetchUserById(id)
      .then(data => {
          return res.status(200).send({ Users: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Users' });
      })
}

function postUser(req, res) {
    const body = req.body
    sendUser(body)
        .then(data => {
            return res.status(200).send({ User: data });
        })
        .catch(err => {
            return res.status(500).send({ error: err });
        })
}

function deleteUserById(req, res) {
    const id = req.params.id
    removeUserById(id)
        .then(data => {
            return res.status(200).send({ message: 'The User has been removed from the database' });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find the User' });
        })
}

function getUserByUsername(req, res) {
    const username = req.params.username
    fetchUserByUsername(username)
        .then(data => {
            return res.status(200).send({ Users: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Users' });
        })
  }

module.exports = { getAllUsers, getUserById, postUser, deleteUserById, getUserByUsername };