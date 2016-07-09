'use strict';

const express = require('express')
const path = require('path')

const http = require('http')

const app = express();
const router = express.Router()
const bodyParser = require('body-parser')

const port = '3000'

var server = http.createServer(app)

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
server.listen(process.env.PORT || port, function() {
  console.log("listening on port 3000")
})
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true })); 

const getTweets = require('./lib/get-tweets.js')
const retweet = require('./lib/retweet.js')

router.get('/', function(req, res, next) {
  res.render('index')
})

router.get('/api/tweets', function(req, res, next) {

  let twitterHandle = req.query.twitterHandle

  getTweets(twitterHandle)
    .then(function(tweets){
      return res.json(tweets)
    })
})

router.post('/retweet', function(req, res, next) {
var status = req.body
var userhandle = req.body
  retweet(status, userhandle)
    .then(function(tweets){
      console.log(res, "this is the response ***")
      return res.json(tweets)
    })
})

app.use('/', router)
