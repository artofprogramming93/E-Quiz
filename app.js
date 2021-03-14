const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
const HomeRouter = require('./application/controllers/HomeController')
const MateriRouter = require('./application/controllers/MateriController')
const QuizRouter  = require('./application/controllers/QuizController')

app.use('/', HomeRouter)
app.use('/materi', MateriRouter)
app.use('/quiz', QuizRouter)
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '/application/views'))
app.listen(6100, function(){
    console.log('server started')
})