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
      $('#flip-text').on('submit', (event) => {
        event.preventDefault()
        this.controller.flipText($('#text-to-flip').val())
      })

      $('#get-user').on('submit', (event) => {
        event.preventDefault()
        this.controller.flipTweets($('#twitter-handle').val())
      })




    })
  }
}

