const mongoose = require('../database/db.js')

const testSchema = new mongoose.Schema({
    name: String
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test