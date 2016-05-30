import $ from 'jquery'

export default class View {
  renderModel (model) {
    console.log('The data from the model is: ' + model.data)
  }

  renderFlippedText (flippedText, origText) {

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
    $('#text-box').append(flipImg)
    $('#text-box').append(flippedText)
  }

  renderTweets (arrTweets) {

    var profileImg = $("<img/>", {
                "src": arrTweets[0].user.profile_image_url,
                "class": "profile-img"
              })

    $('.twitter-box').append(profileImg)

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

    })
  }
}
