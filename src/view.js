import $ from 'jquery'

export default class View {
  renderModel (model) {
    console.log('The data from the model is: ' + model.data)
  }

  renderGraffiti (graffiti) {
    $('#wall').append(graffiti)
  }
}
