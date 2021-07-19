// Database Imports
const mongoose = require('../database/db.js')

// Schema/Model creation
const userSchema = new mongoose.Schema({

    username : {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        require: true,
        select: false
    }

})

// Schema/Model declaration
const User = mongoose.model('User', userSchema)

// Exports
module.exports = User