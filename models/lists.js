const mongoose = require('mongoose')

const { Schema, model } = mongoose

const listSchema = new Schema({
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movies'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const List = model('List', listSchema)

module.exports = List