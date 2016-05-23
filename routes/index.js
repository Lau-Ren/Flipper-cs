var express = require('express');
var router = express.Router();
var isArray =require('isarray')

/* required modules*/
var flip = require('../lib/flip.js')
var tag =require('../lib/tag.js')
var neutralise =require('../lib/neutralise.js')
var nouns =require('../db/nouns.json')
var noun =require('../lib/noun.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* POST result. */
router.post('/', function(req, res, next) {
  var enteredText = (req.body.text).split(" ")
  
  var flippedStr=	noun(nouns, enteredText)

	  res.render('index', {flippedStr:flippedStr});
		
	



});


module.exports = router;
