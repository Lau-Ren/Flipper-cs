import Model from './model'
import View from './view'

export default class Controller {

  constructor () {
    this.model = new Model()
    this.view = new View()
  }

  flipText (text) {
    var origArr = text.split(" ")
    var newStr = this.model.flipper(origArr) //flipper takes an array but returns a string
    this.view.renderFlippedText(newStr)
  }

  flipTweets (userhandle) {
    var tweets = this.model.getTweets(userhandle)
     .then(function(thing){
        console.log(thing, "this is the thing")

     })

    this.view.renderTweets(tweets)

  }


}
