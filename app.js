var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./db/mongo.connection');

var users = require('./routes/users');
var professores = require('./routes/professores');
var alunos = require('./routes/alunos');
var login = require('./routes/login');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
    next();
});

app.use('/api/v1/users', users);
app.use('/professores/', professores);
app.use('/alunos/', alunos);
app.use('/login/', login);

module.exports = app;