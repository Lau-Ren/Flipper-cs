import Model from './model'
import View from './view'

export default class Controller {

  constructor () {
    this.model = new Model()
    this.view = new View()
  }

  dance () {
    console.log('Dancing in the controller! ~~~')

    this.model.getData()
    this.view.renderModel(this.model)
  }

  processGraffiti (graffiti) {
    this.view.renderGraffiti(graffiti)
  }
}
