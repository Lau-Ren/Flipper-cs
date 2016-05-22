var express = require('express');
var router = express.Router();
var isArray =require('isarray')

/* required modules*/
var flip = require('../lib/flip.js')
var tag =require('../lib/tag.js')
var neutralise =require('../lib/neutralise.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* POST result. */
router.post('/', function(req, res, next) {
  var enteredText =req.body.text
  
  // neutralise text
neutralise(enteredText)
	.then(flip)
	.then(function(obj) {

	  res.render('index', obj);
		
	})

  // tag text
  // var taggedArr = tag(enteredText)

  // flip text

  // flippedText = flip(tag(enteredText))


});


module.exports = router;
