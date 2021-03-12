const Controller = require('express').Router()


Controller.get('/', function(request, response, next){
  response.render('home')  
})

module.exports = Controller