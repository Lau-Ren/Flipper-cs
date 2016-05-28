import $ from 'jquery'
import Controller from './controller'

export default class Router {

  constructor () {
    this.controller = new Controller()
  }

  listen () {
    console.log('listening in the router')

    // this is where you put your event listeners
    // which call controller actions
    $(() => {
      $(document).on('keydown', (event) => {
        this.controller.dance()
      })
      $('#graffiti').on('submit', (event) => {
        event.preventDefault()
        this.controller.processGraffiti($('#text').val())
      })
    })
  }
}

