var express = require('express');
var router = express.Router();

/* GET globe page. */
router.get('/', function(req, res, next) {
    res.render('globe', { title: 'Globe Map'});

});

module.exports = router;