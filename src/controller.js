import Model from './model'
import View from './view'

export default class Controller {

  constructor () {
    this.model = new Model()
    this.view = new View()
  }

  flipText (text) {
    var origArr = text.split(" ")
    var flippedText = this.model.flipper(origArr) //flipper takes an array but returns a string
    this.view.renderFlippedText(flippedText, text)
  }

  flipTweets (userhandle) {
    this.model.getTweets(userhandle)
      .then((tweets)=> {
        let flippedTweets = this.model.flipTweets(tweets)

        this.view.renderTweets(flippedTweets)
      })
      .catch(function(err){
        console.log(err, "ERROR");
      })

  }


}
