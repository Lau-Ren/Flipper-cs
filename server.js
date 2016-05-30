'use strict';

const express = require('express')
const path = require('path')

const http = require('http')

const app = express();
const router = express.Router()
const bodyParser = require('body-parser')

// get port from environment and store in Express
const port = '3000'

// create HTTP server
var server = http.createServer(app)

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
server.listen(port)
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes go below:

const getTweets = require('./lib/get-tweets.js')

//get homepage
router.get('/', function(req, res, next) {
  res.render('index')
})

//get tweets
router.get('/api/tweets', function(req, res, next) {

  let twitterHandle = req.query.twitterHandle

  getTweets(twitterHandle)
    .then(function(tweets){
      return res.json(tweets)
    })
})

app.use('/', router)
