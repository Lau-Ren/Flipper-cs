'use strict';

const Promise = require('promise')
const Twitter =  require('twitter')

const dotenv = require('dotenv').config();

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// async function to get tweets
module.exports = function (twitterHandle){

return new Promise(function (resolve, reject) {
    client.get('statuses/user_timeline', {count: 5, screen_name: twitterHandle}, function(err, tweets, resp){

      if(err) {
        console.log("ERROR in get-tweets function");
        reject(err);
      }
      else {
        // console.log(tweets, "here")

        resolve(tweets)

      }
    });

  });
}






