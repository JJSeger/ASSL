var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.render('artists', { title: 'Artist Spotlight'});

});

module.exports = router;