const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')

// MOVIE CONTROLLERS

// index
router.get('/', (req, res) => {
    res.send('movies index')
})

// new
router.get('/new', (req, res) => {
    res.send('movies new')
})

// seed
router.get('/seed', (req, res) => {
    res.send('movies seed')
})

// show
router.get('/:id', (req, res) => {
    res.send('movies show')
})

// create
router.post('/', (req, res) => {
    res.send('CREATE MOVIE')
})

// delete
router.delete('/:id', (req, res) => {
    res.send('DELETE MOVIE')
})

// edit
router.get('/:id/edit', (req, res) => {
    res.send('edit movie')
})

// update
router.put('/:id', (req, res) => {
    res.send('UPDATE MOVIE')
})

module.exports = router