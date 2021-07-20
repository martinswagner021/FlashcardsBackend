// Database Imports
const { Schema } = require('mongoose')
const mongoose = require('../database/db')

// Schema/Model creation
const cardSchema = new Schema({

    title: {
        type: String
    },
    content: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})

// Schema/Model declaration
const Card = mongoose.model('Card', cardSchema)

// Exports
module.exports = Card