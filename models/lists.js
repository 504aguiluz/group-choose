 const mongoose = require('mongoose')

const { Schema, model } = mongoose

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    submittedBy: {
        type:String,
        required: true
    }
}, {timestamps: true}
)

const List = model('List', listSchema)

module.exports = List