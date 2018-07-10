const express = require('express');
const router = express.Router();

const courseRouter = require('./api.courses_route');
const userRouter = require('./api.users_route');
const curriculaRouter = require('./api.curricula_route');
const sessionRouter = require('./api.sessions_route');

router.use('/course', courseRouter);

router.use('/user', userRouter);

router.use('/curricula', curriculaRouter);

router.use('/session', sessionRouter);

module.exports = router;