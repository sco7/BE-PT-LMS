const { fetchAllCourses, fetchCourseById, fetchCoursesByUserId, fetchCoursesByCurriculaId, fetchCoursesByUserIdAndStatus, sendCourse, removeCourseById, fetchCoursesByUserIdCompleted } = require('../models/api.course.model');

function getAllCourses(req, res) {
    fetchAllCourses()
        .then(data => {
            return res.status(200).send({ Courses: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find Courses' });
        })
  }

function getCourseById(req, res) {
  const id = req.params.id
  fetchCourseById(id)
      .then(data => {
          return res.status(200).send({ Courses: data });
      })
      .catch(err => {
          return res.status(500).send({ error: 'Cannot find Course' });
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

function getCoursesByUserIdCompleted(req, res) {
    const id = req.params.id
    fetchCoursesByUserIdCompleted(id)
        .then(data => {
            return res.status(200).send({ Courses: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find any Courses for the specified user' });
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
            return res.status(500).send({ error: 'Cannot find any Courses for the specified user' });
        })
  }

  function postCourse(req, res) {
    const body = req.body
    sendCourse(body)
        .then(data => {
            return res.status(200).send({ Course: data });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Course could not be posted' });
        })
}

function deleteCourseById(req, res) {
    const id = req.params.id
    removeCourseById(id)
        .then(data => {
            return res.status(200).send({ message: 'Course has been removed from the database' });
        })
        .catch(err => {
            return res.status(500).send({ error: 'Cannot find the Course' });
        })
}

module.exports = { getAllCourses, getCourseById, getCoursesByUserId, getCoursesByCurriculaId, getCoursesByUserIdAndStatus, postCourse, deleteCourseById, getCoursesByUserIdCompleted };
