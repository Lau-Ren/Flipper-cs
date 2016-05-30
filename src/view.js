import $ from 'jquery'

export default class View {
  renderModel (model) {
    console.log('The data from the model is: ' + model.data)
  }

  renderFlippedText (flippedText) {
    $('#flipped-box').append(flippedText)
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
                "class": "original-tweet"
              })

      var flippedTweet = $("<p/>", {
                "text": tweet.flipped_text,
                "class": "flipped-tweet"
              })

      $('.twitter-box').append(origTweet)
      $('.twitter-box').append(flippedTweet)

    })
  }
}
