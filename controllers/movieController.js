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
    
    Movie.create([
        {
            title: 'Rambo',
            genre: 'Action',
            submittedBy: 'Matt',
            yearMade: 1985,
            director: 'George P. Cosmatos',
            actors: ['Sylvestor Stallone'], 
            tags: ['80s action', 'kill em all', 'rad'],
            rating: 7
        }, 
        {
            title: 'Stalker',
            genre: 'Thriller',
            submittedBy: 'Nic',
            yearMade: 1979,
            director: 'Andrei Tarkovsky',
            actors: ['Alisa Freyndlikh', 'Aleksandr Kaydanovskiy'], 
            tags: ['heavy', 'masterpiece', 'russian'],
            rating: 10
        },
        {
            title: "Pee-Wee's Big Adventure",
            genre: "Comedy",
            submittedBy: "Jenn",
            yearMade: 1985,
            director: 'Tim Burton',
            actors: ['Paul Ruben', 'Elizabeth Daily'], 
            tags: ['weird', 'zany'],
            rating: 9
        }
    ], (err, data) => {
        if(err){
            console.log(err)
        }
        res.redirect('/movies')
    })
    
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