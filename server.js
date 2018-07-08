if (process.env.NODE_ENV !== 'test') process.env.NODE_ENV = 'dev';

//const course = require('./models/api.course.model');
//const religions = require('./models/api.religion_model');
//const people = require('./models/api.people.model');

const express = require('express');
const app = express();
const { json } = require('body-parser');
const db = require('./db/config.index');
const apiRouter = require('./routes/api.router');

app.use(json());

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  if (err.status === 404) res.status(404).send({ err: err.message });
  else res.status(500).send({ err:err.message });
});

module.exports = app;