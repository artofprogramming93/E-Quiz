const Controller = require('express').Router()


Controller.get('/', function(request, response, next){
  response.render('quiz')
})

module.exports = Controller