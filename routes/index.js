var express = require('express');
var router = express.Router();


/* required modules*/
var flip = require('../lib/flip.js')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flipper' });
});


/* POST result. */
router.post('/', function(req, res, next) {

  // console.log(req.body, "this is all the text")

  flip(req.body.text)
  res.render('index', { title: 'Flipper' });
});


module.exports = router;
