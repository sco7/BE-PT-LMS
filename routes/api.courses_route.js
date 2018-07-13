const express = require('express');
const router = express.Router();
const courseControl = require('../controllers/api.course_controller');

router.get('/', courseControl.getAllCourses);

router.get('/:id', courseControl.getCourseById);

router.get('/user/:id', courseControl.getCoursesByUserId);

router.get('/curricula/:id', courseControl.getCoursesByCurriculaId);

router.get('/notcompleted/user/:id', courseControl.getCoursesByUserIdNotCompleted);

router.get('/user/:id/:status', courseControl.getCoursesByUserIdAndStatus);

router.post('/', courseControl.postCourse);

router.delete('/:id', courseControl.deleteCourse )

module.exports = router;














