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


}
