const express = require('express')
const List = require('../models/lists')
const router = express.Router()
const Movie = require('../models/movies')

// MOVIE CONTROLLERS

// index
router.get('/', async (req, res) => {

console.log(req.query)

    let order = {}
    let filter = {}

    if (req.query.sort === 'asc' || req.query.sort === 'desc') { 
        order = { title: req.query.sort}
    } else if (req.query.sort == 'genre') {
        order = {genre: 'asc'}
    } else if (req.query.sort == 'rating') {
        order = {rating: 'desc'}
    }


    Movie.find(filter).sort(order).exec((err, allMovies) => {
        List.find({}, (err, allLists) => {
            res.render('movies/movies-index.ejs', {
            lists: allLists,
            movies: allMovies,
            genre: allMovies.genre
        })
    })
    }
)})

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
    
    // res.send('movies seed')
})

// show
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (error, foundMovie)=>{
        List.find({}, (err, allLists) => {
            res.render('movies/movies-show.ejs', {
                lists: allLists,
                movie: foundMovie
        })
        })
    })
})

// create
router.post('/', (req, res) => {
    Movie.create(req.body, (error, createdMovie) => {
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
            res.render('movies/movies-edit.ejs', {
                movie: foundMovie
                    
            })
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