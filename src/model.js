import words from './words.json'
import Dotenv from  'dotenv'
var dotenv = Dotenv.config();
import Promise from 'promise'

export default class Model {



  //  function to flip array of words
  flipper (arr) {
    var origArray = arr

    var flippedArr = origArray.map(function(item){
      if(words.hasOwnProperty(item)){
            return words[item]
      } else {
        return item
      }
    })
    return flippedArr.join(" ")
  }






   // async function to get tweets
  getTweets (twitterHandle) {
    var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });

    return new Promise(function (resolve, reject) {
      client.get('statuses/user_timeline', {count: 5, screen_name: twitterHandle}, function(err, tweets, resp){

        if(err) {
          console.log("ERROR in tweets function");
          reject(err);
        }
        else {
          resolve(tweets)
        }

      });
    })
    .then(function(tweets){
      var arrTweets = tweets

      for(var i = 0; i < tweets.length; i++){
        var newStr = flipper(nouns, arrTweets[i].text.split(" "))
        arrTweets[i].flipped_text = newStr
        // console.log(arrTweets[i], "this is " + i)
      }

      res.render('index', {tweets:arrTweets});

    })

  }




}
