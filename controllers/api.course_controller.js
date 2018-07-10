const { fetchAllCourses, fetchCourseById, fetchCoursesByUserId, fetchCoursesByCurriculaId } = require('../models/api.course.model');

function getAllCourses(req, res) {
  fetchAllCourses((err, data) => {
      if (err) return res.status(500).send(err);
      else res.status(200).send({ Courses: data });
      });
}

function getCourseById(req, res) {
  const id = req.params.id
  fetchCourseById(id)
      .then(data => {
          return res.status(200).send({ Courses: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Courses' });
      })
}

function getCoursesByUserId(req, res) {
  const id = req.params.id
  fetchCoursesByUserId(id)
      .then(data => {
          return res.status(200).send({ Courses: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Courses' });
      })
}

function getCoursesByCurriculaId(req, res) {
  const id = req.params.id
  fetchCoursesByCurriculaId(id)
      .then(data => {
          return res.status(200).send({ Courses: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Courses' });
      })
}

module.exports = { getAllCourses, getCourseById, getCoursesByUserId, getCoursesByCurriculaId };
