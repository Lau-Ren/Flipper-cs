import $ from 'jquery'

export default class View {
  renderModel (model) {
    console.log('The data from the model is: ' + model.data)
  }

  renderFlippedText (flippedText, origText) {
    $('#text-box').empty()

    var originalText = $("<p/>", {
              "text": origText,
              "class": "original"
            })

    var flipImg = $("<img/>", {
                "src":'./images/triangleWhite.png' ,
                "class": "flip-img"
              })

    var flippedText = $("<p/>", {
              "text": flippedText,
              "class": "flipped"
            })

    $('#text-box').append(originalText)
    $('#text-box').append(flippedText)
  }

  renderRetweet (thing) {
    console.log("in the view render place")
    $('.flipped').append("done!")
  }

  renderTweets (arrTweets, userhandle) { // this function is too long, try and seperate it out!
    $('#twitter-box').empty()
    $('.profile-image').empty()

    var profileImg = $("<img/>", {
                "src": arrTweets[0].user.profile_image_url,
                "class": "profile-img"
              })
    var who = $("<p/>", {
                "text": arrTweets[0].user.name +"'s most recent tweets",
                "class": "profile-img"
              })

    $('.profile-image').append(profileImg)
    $('.profile-image').append(who)

    arrTweets.forEach(function(tweet){

      var origTweet = $("<p/>", {
                "text": tweet.text,
                "class": "original"
              })

      var flippedTweet = $("<p/>", {
                "text": tweet.flipped_text,
                "class": "flipped"
              })

      $('#twitter-box').append(origTweet)
      $('#twitter-box').append(flippedTweet)

      var urlHandle =  encodeURIComponent("#FLIPPER @" + userhandle + ": ")
      var  urlTweet = encodeURIComponent(tweet.flipped_text)

      var retweetButton = $("<a/>", {
                  "href": 'https://twitter.com/intent/tweet?text="' + urlHandle + urlTweet + '"',
                  "class": "retweet-link button",
                  "target": "_blank",
                  "text": "Tweet"
                })

      $('#twitter-box').append(retweetButton)

    })
  }
}
