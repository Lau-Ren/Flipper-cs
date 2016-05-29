import $ from 'jquery'

export default class View {
  renderModel (model) {
    console.log('The data from the model is: ' + model.data)
  }

  renderFlippedText (flippedText) {
    // console.log(flippedText, "this is flipped text in the view");

    $('#flipped-box').append(flippedText)
  }

  renderTweets (arrTweets) {
    // console.log(flippedText, "this is flipped text in the view");
    console.log(arrTweets);
    // $('#flipped-box').append(flippedText)
  }
}
