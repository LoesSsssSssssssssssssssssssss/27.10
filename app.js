var express = require('express')
var app = express()
var router = express.Router()
var birds = require('./birds');
var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }

  router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

  router.use(
    '/user/:id',
    function (req, res, next) {
      console.log('Request URL:', req.originalUrl)
      next()
    },
    function (req, res, next) {
      console.log('Request Type:', req.method)
      next()
    }
  )

  router.get(
    '/user/:id',
    function (req, res, next) {
      // if the user ID is 0, skip to the next router
      if (req.params.id == 0) next('route')
      // otherwise pass control to the next middleware function in this stack
      else next() //
    },
    function (req, res, next) {
      // render a regular page
      res.render('regular')
    }
  )

  router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    res.render('special')
  })

app.use('/', router)
app.use(requestTime)
app.use('/birds', birds);
app.use(express.static('public'))
app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText +=
      '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})