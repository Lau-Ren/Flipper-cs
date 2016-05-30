import words from './words.json'
import  $ from 'jquery'

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

  flipTweets(tweets){
    var arrTweets = tweets

    for(var i = 0; i < arrTweets.length; i++){
      var newStr = this.flipper( arrTweets[i].text.split(" "))
      arrTweets[i].flipped_text = newStr
    }

    return arrTweets



  }
// async function to get tweets
  getTweets (twitterHandle) {

    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        data: {twitterHandle:twitterHandle},
        url: 'api/tweets', // don't need a full url just the endpoint if you're hitting your own server
        async: true,
        headers: {}, // a header object in case you need to send parameters
        success: resolve, // a function called when the request has finished
        error: reject // a function called if it fails
      })
    })

  }





}
