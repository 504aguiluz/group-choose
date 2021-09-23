const express = require('express')
const router = express.Router()
const Lists = require('../controllers/listController')

// index
router.get('/', (req, res) => {
    res.send('lists index')
})

// new
router.get('/new', (req, res) => {
    res.send('lists new')
})

// show
router.get('/:id', (req, res) => {
    res.send('lists show')
})

// create
router.post('/', (req, res) => {
    res.send('CREATE LISTS')
})

// delete
router.delete('/:id', (req, res) => {
    res.send('DELETE LISTS')
})

// edit
router.get('/:id/edit', (req, res) => {
    res.send('edit lists')
})

// update
router.put('/:id', (req, res) => {
    res.send('UPDATE LISTS')
})


module.exports = router