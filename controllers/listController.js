const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')
const Lists = require('../controllers/listController')
const List = require('../models/lists')
const axios = require('axios')

// index
router.get('/', (req, res) => {
    List.find({}, (err, allLists) => {
        res.render('lists/lists-index.ejs', {
            lists: allLists
        })
    })
})

// new
router.get('/new', (req, res) => {
    res.render('lists/lists-new.ejs')
})

// show
router.get('/:id', (req, res) => {
    List.findById(req.params.id).populate('movies').exec((error, foundList) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.render('lists/lists-show.ejs', {
                list: foundList
            })
        }
    })
})

// create
router.post('/', (req, res) => {
    List.create(req.body, (error, createdList) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/lists')
        }
    })
})

// add movie to list
router.post('/addtolist', (req, res) => {
    
    console.log(req.body)
    List.findById(req.body.listId, (error, foundList) => {
        
        if(error){
            console.log(error)
            res.send(error)
        } else {
            foundList.movies.push(req.body.movieId)
            // console.log(req.body)
            foundList.save()
            res.redirect('/movies')
        }
    })
    
})

// remove from list
router.put('/:id/removefromlist', (req, res) => {

    List.findById(req.params.id, (error, foundList) => {
        // const indexOfMovie = foundList.movies.indexOf(req.body.movieId)

        if (error)return console.log(error)

        Movie.findById(req.body.movieId, (error, foundMovie) => {
            if (error)return console.log(error)
            
            foundList.movies.remove(foundMovie)
            foundList.save()
            res.redirect(`/lists/${req.params.id}`)
        })
        // } else {
        //     foundList.movies.splice(req.body.movieId, 1)
        //     foundList.save()
        //     res.redirect('/movies')
        // }
    })
})

// delete
router.delete('/:id', (req, res) => {
    List.findByIdAndDelete(req.params.id, (error, deletedList) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/lists')
        }
    })
})

// edit
router.get('/:id/edit', (req, res) => {
    List.findById(req.params.id, (error, foundList) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.render('lists/lists-edit.ejs', {
                list: foundList
            })
        }
    })
})

// update
router.put('/:id', (req, res) => {
    List.findByIdAndUpdate(req.params.id,req.body, {
        new:true
    },
    (error, updatedList) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/lists')
        }
    }
    )
})


module.exports = router