const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const db = mongoose.connection

db.on('error', () => console.log("Error with db connection..."))
db.once('open', () => console.log("Successfully connected to db..."))

module.exports = mongoose