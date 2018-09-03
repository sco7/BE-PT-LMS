//required for running locally
const pgp = require('pg-promise')({promiseLib: Promise});
const config = require(`../config/config.${process.env.NODE_ENV}.js`);
console.log(config);

module.exports = pgp(config.db);




//required for Heroku deployment
// const pgp = require('pg-promise')({promiseLib: Promise});
// const config = process.env.DATABASE_URL ? process.env.DATABASE_URL : require(`./config/${process.env.NODE_ENV}.js`);

// module.exports = pgp(config);