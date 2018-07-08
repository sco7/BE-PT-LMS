const express = require('express');
const router = express.Router();

const courseRouter = require('./api.courses_route');
//const houseRouter = require('./api.house_route');
//const religionRouter = require('./api.religion_route');

router.use('/course', courseRouter);

//router.use('/houses', houseRouter);

//router.use('/religions', religionRouter);

module.exports = router;