var express = require('express');
var router = express.Router();
var loginServiceMongo = require('../services/login.services.mongo.js');

router.get('/list', function(req, res) {
    loginServiceMongo.list(req,res);
});

router.post('/check', function(req, res, next) {
    loginServiceMongo.check(req.body)
      .then((login) => {
        if (login) {
          res.status(200).json(login);
        } else {
          res.status(401).json({ message: 'Invalid login' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Internal server error' });
      });
  });

module.exports = router;