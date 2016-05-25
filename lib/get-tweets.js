var Twitter = require('twitter');
var  dotenv =require('dotenv').config();


var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


module.exports = function (){


	client.get('favorites/list', {count: 1, screen_name: 'realdonaldtrump'}, function(err, tweets, resp){
		console.log("**TWEETS", tweets['text']);
		// console.log("**RESP", resp);

	});



}




