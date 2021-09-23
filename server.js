const express = require('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
require('dotenv').config()

// connecting .envs
const PORT = process.env.PORT

// requiring models
const User = require('./models/users')
const Movie = require('./models/movies')
const List = require('./models/lists')

// static assets
app.use(express.static('public'))

// Set up Database
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log('database connected') // only when we initially start our server
})

db.on('error', (err) => {console.log('ERROR: ', err)})
db.on('connected', () => {console.log('mongo connected')})
db.on('disconnected', () => {console.log('mongo disconnected')})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// // CUSTOM MIDDLEWARE 
// // custom middleware to make currentUser available as a local variable on all routes
// app.use((req, res, next) => {
//     res.locals.currentUser = req.session.currentUser
//     next()
// })

// // allows local messages across routes
// app.use((req, res, next) => {
//     res.locals.message = req.session.message
//     // make the session message available locally to your routes
//     req.session.message = ''
//     // reset the session message after each request
//     next()
// })

// IMPORTED CONTROLLERS
const userController = require('./controllers/userController')
app.use('/users', userController)

const movieController = require('./controllers/movieController')
app.use('/movies', movieController)

const listController = require('./controllers/listController')
app.use('/lists', listController)



// listener
app.listen(PORT, ()=>{
    console.log(`movie-choose server is listening on port: ${PORT}`)
})
