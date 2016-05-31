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
module.exports = function (status, twitterHandle) {


  var statusText = "#FLIPPER @" + twitterHandle + ": " + status
  console.log(statusText);

  return new Promise(function (resolve, reject) {

    client.post('statuses/user_timeline', {status: status}, function(err, tweets, resp){

      if(err) {
        reject(err);
      }
      else {
        resolve(tweets)
      }

    });
  });
}
