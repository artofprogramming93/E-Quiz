const Controller = require('express').Router()


Controller.get('/:page', function(request, response, next){
  // console.log(request.params.page)
  response.render('quiz-'+request.params.page+'', {
    title: 'Quiz Pesawat Sederhana',
      subtitle: `Usaha dan Pesawat 
      Sederhana dalam 
      Kehidupan Sehari-hari`
  })
})

module.exports = Controller