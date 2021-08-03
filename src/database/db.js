// Libraries Imports
const mongoose = require('mongoose')

// Connection to the database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

// Check if the db is correctly connected and working...
const db = mongoose.connection

db.on('error', () => console.log("Error with db connection..."))
db.once('open', () => console.log("Successfully connected to db..."))

// Exports
module.exports = mongoose