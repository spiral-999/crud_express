var express = require('express');
var router = express.Router();
var AlunosServiceMongo = require('../services/alunos.service.mongo.js');

router.get('/list', (req, res, next) => {
    AlunosServiceMongo.list(req, res);
});

router.post('/register', (req, res, next) => {
    AlunosServiceMongo.register(req, res);
});

router.put('/update/:id', (req, res, next) => {
    AlunosServiceMongo.update(req, res);
});

router.delete('/delete/:id', (req, res, next) => {
    AlunosServiceMongo.delete(req, res);
});

router.get('/retrieve/:id', (req, res, next) => {
    AlunosServiceMongo.retrieve(req, res);
});

module.exports = router;