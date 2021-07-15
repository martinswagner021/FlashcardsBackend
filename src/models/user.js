const mongoose = require('../database/db.js')

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

const User = mongoose.model('User', userSchema)

module.exports = User