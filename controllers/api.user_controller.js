const { fetchAllUsers, fetchUserById } = require('../models/api.user.model');

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

module.exports = { getAllUsers, getUserById };