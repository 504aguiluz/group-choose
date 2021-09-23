const mongoose = require('mongoose')

const { Schema, model } = mongoose

const movieSchema = new Schema ({
    title: {
        type: String,
        unique: true 
    },
    genre: String,
    submittedBy: String,
    yearMade: Number,
    director: String,
    actors: [String], 
    tags: [String],
    rating: Number
    })

    const Movie = model('Movie', movieSchema)

module.exports = Movie