var express = require('express');
var router = express.Router();


/* required modules*/
var flip = require('../lib/flip.js')
var tag =require('../lib/tag.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flipper' });
});


/* POST result. */
router.post('/', function(req, res, next) {
  var enteredTxt =req.body.text
  // send entered text to be tagged
  var arrOfTaggedWords = tag(enteredTxt)

  res.render('index', {arrOfTaggedWords:arrOfTaggedWords});
});


module.exports = router;
