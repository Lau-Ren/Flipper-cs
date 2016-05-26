var express = require('express');
var router = express.Router();
var isArray =require('isarray')

var Promise = require('promise');
/* required modules*/
var flip = require('../lib/flip.js')
var tag =require('../lib/tag.js')
var neutralise =require('../lib/neutralise.js')
var nouns =require('../db/nouns.json')
var noun =require('../lib/noun.js')
var tweets=require('../lib/get-tweets.js')

/* GET home page. */
router.get('/', function(req, res, next) {
 	tweets('realdonaldtrump') //future use var, check other twitter users
 		.then(function(tweets){	
 			 	var newArr = tweets
 			 			// console.log(tweets.length);

 			for(var i = 0; i < tweets.length; i++){
 				var newStr = noun(nouns, newArr[i].text.split(" "))
 				newArr[i].flipped_text = newStr
 				console.log(newArr[i], "this is " + i)
 			
 		  	
 			} 			
 		  

 		 // console.log(tweets, "looksie here");
 		 	res.render('index', {tweets:newArr});
		
 		})

});


/* POST result. */
router.post('/', function(req, res, next) {

  var enteredText = (req.body.text).split(" ")
  
  var flippedStr=	noun(nouns, enteredText)

	res.render('index', {flippedStr:flippedStr});
		
});


module.exports = router;
