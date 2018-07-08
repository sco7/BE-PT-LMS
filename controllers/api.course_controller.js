const { fetchAllCourses, fetchCoursesById } = require('../models/api.course.model');

function getAllCourses(req, res) {
  fetchAllCourses((err, data) => {
      if (err) return res.status(500).send(err);
      else res.status(200).send({ Courses: data });
      });
}

function getCoursesById(req, res) {
  const id = req.params.id
  fetchCoursesById(id)
      .then(data => {
          return res.status(200).send({ Courses: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Courses' });
      })
}

module.exports = { getAllCourses, getCoursesById };
