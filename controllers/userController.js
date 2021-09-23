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

router.get('/register', (req, res) => {
    res.send('register route')
})

router.post('/register', (req, res) => {
    res.send('POST REGISTER')
})

router.get('/login', (req, res) => {
    res.send('login route')
})

router.post('/login', (req, res) => {
    res.send('POST LOGIN')
})

router.get('/logout', (req, res) => {
    res.send('LOGOUT')
})


module.exports = router