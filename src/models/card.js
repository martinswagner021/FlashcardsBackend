// Database Imports
const mongoose = require('../database/db')

// Schema/Model creation
const cardSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        required: true,
    },
    creator: {
        ref: 'User'
    }
})

// Schema/Model declaration
const Card = mongoose.model('Card', cardSchema)

// Exports
module.exports = Card