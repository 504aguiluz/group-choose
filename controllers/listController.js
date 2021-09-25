const express = require('express')
const router = express.Router()
const Lists = require('../controllers/listController')
const List = require('../models/lists')

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
    List.findById(req.params.id, (error, foundList) => {
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
router.post('/lists/:id/movies/:id/add-movie', (req, res) => {
    
    
    List.create(req.body, (error, createdList) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/lists')
        }
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