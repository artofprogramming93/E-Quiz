const Controller = require('express').Router()


Controller.get('/pesawat-sederhana', function(request, response, next){
   var data = {
       materi_role: 'pesawat-sederhana',
       status: true
   }
  response.render('pesawat-sederhana', {
      title: 'Pesawat Sederhana',
      subtitle: `Usaha dan Pesawat 
      Sederhana dalam 
      Kehidupan Sehari-hari`
  })
})

module.exports = Controller