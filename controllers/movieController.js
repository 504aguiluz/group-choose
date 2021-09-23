const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')

// MOVIE CONTROLLERS

// index
router.get('/', (req, res) => {
    Movie.find({}, (err, allMovies) => {
        res.render('movies/movies-index.ejs', {
            movies: allMovies
        })
    })
})

// new
router.get('/new', (req, res) => {
    res.render('movies/movies-new.ejs')
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
    Movie.findById(req.params.id, (error, foundMovie)=>{
        res.render('movies/movies-show.ejs', {
            movie: foundMovie
        })
    })
})

// create
router.post('/', (req, res) => {
    Movie.create(req.body, (error,) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/movies')
        }
    })
})

// delete
router.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (error, deletedMovie) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/movies')
        }
    })
})

// edit
router.get('/:id/edit', (req, res) => {
    Movie.findById(req.params.id, (error, foundMovie) => {
        if (error){
            console.log(error)
            res.send(error)
        } else {
            res.render('movies/movies-edit.ejs')
        }
    })
})

// update
router.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
        },
        ( error, updatedMovie) => {
            if(error) {
                console.log(error)
                res.send(error)
            } else {
                res.redirect('/movies')
            }
        }
    )
})

module.exports = router