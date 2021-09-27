const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')
const { rawListeners } = require('npmlog')
const { Router } = require('express')

// USER ROUTES
router.get('/', (req, res) => {
    res.send('user route')
})

// register
router.get('/register', (req, res) => {
    res.render('users/register.ejs')
})

// register post - username/pw
router.post('/register', (req, res) => {
    
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)

    User.findOne({username: req.body.username}, (error, userExists) => {
        if(userExists) {
            res.send('Username already exists! Try again.')
        } else {
            User.create(req.body, (error, createdUser) => {
                req.session.currentUser = createdUser
                res.redirect('/about')
            })
        }
    } )

})

// login
router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})

// login - post username/pw
router.post('/login', (req, res) => {
    User.findOne({username: req.body.username}, (error, foundUser) => {
        if(foundUser) {
            const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)

            if(validLogin){
                req.session.currentUser = foundUser
                res.redirect('/about')
            } else {
                res.send('Invalid username or password')
            }
        } else {
            res.send('Invalid username or password')
        }
    })
})

// destroy session
router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/users/login')
})


module.exports = router