const express = require('express');
const router = express.Router();
const courseControl = require('../controllers/api.course_controller');

router.get('/', courseControl.getAllCourses);

router.get('/:id', courseControl.getCoursesById);

module.exports = router;