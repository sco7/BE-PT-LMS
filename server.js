if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';


const express = require('express');
const app = express();
const { json } = require('body-parser');
const db = require('./db/config.index');
const apiRouter = require('./routes/api.router');
const cors = require('cors');

app.use(json());

app.use(cors());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  if (err.status === 404) res.status(404).send({ err: err.message });
  else res.status(500).send({ err:err.message });
});

module.exports = app;