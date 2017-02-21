var express = require('express');
var router = express.Router();

/* GET artists listing. */
router.get('/', function(req, res, next) {
  res.send('this is the artist page!!');
});

module.exports = router;


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anthracite Glassworks'});

});

module.exports = router;