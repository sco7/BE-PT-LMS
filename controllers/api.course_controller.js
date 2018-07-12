const { fetchAllCourses, fetchCourseById, fetchCoursesByUserId, fetchCoursesByCurriculaId, fetchCoursesByUserIdAndStatus, sendCourse, removeCourseById, fetchCoursesByUserIdNotCompleted } = require('../models/api.course.model');

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

function getCoursesByUserIdNotCompleted(req, res) {
    const id = req.params.id
    fetchCoursesByUserIdNotCompleted(id)
        .then(data => {
            return res.status(200).send({ Courses: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Courses for User' });
        })
  }

  function getCoursesByUserIdAndStatus(req, res) {
    const id = req.params.id
    const status = req.params.status
    fetchCoursesByUserIdAndStatus(id, status)
        .then(data => {
            return res.status(200).send({ Courses: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Courses for User' });
        })
  }

  function postCourse(req, res) {
    const body = req.body
    sendCourse(body)
        .then(data => {
            return res.status(200).send({ Course: data });
        })
        .catch(err => {
            return res.status(500).send({ error: err });
        })
}

function deleteCourse(req, res) {
    const id = req.params.id
    removeCourseById(id)
        .then(data => {
            return res.status(200).send({ message: 'Course has been removed from the database' });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find the Course' });
        })
}

module.exports = { getAllCourses, getCourseById, getCoursesByUserId, getCoursesByCurriculaId, getCoursesByUserIdAndStatus, postCourse, deleteCourse, getCoursesByUserIdNotCompleted };
