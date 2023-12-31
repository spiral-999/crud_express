var express = require('express');
var router = express.Router();
var ProfessoresServiceMongo = require('../services/teacher.service.mongo');

router.get('/list', (req, res, next) => {
    ProfessoresServiceMongo.list(req, res);
});

router.post('/register', (req, res, next) => {
    ProfessoresServiceMongo.register(req, res);
});

router.put('/update/:id', (req, res, next) => {
    ProfessoresServiceMongo.update(req, res);
});

router.delete('/delete/:id', (req, res, next) => {
    ProfessoresServiceMongo.delete(req, res);
});

router.get('/retrieve/:id', (req, res, next) => {
    ProfessoresServiceMongo.retrieve(req, res);
});
module.exports = router;