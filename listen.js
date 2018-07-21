const app = require('./server');
//const PORT = 3000;

const PORT = process.env.NODE_ENV === 'production'? process.env.PORT : 3000;

app.listen(PORT, function (err) {
    if(err) return console.log(err);
    console.log(`App listening on port ${PORT}...`);
});
