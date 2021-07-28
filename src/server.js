// Libraries Imports
const express = require('express')
const cors = require('cors')

// Routes Imports
const register = require('./routes/register')
const login = require('./routes/login')
const card = require('./routes/card')

// Middlewares Imports
const authenticator = require('./middlewares/authenticator')

// Creation of the app
const app = express()
app.use(express.json())

app.use(cors())

// Routes
app.use('/register', register)
app.use('/login', login)
app.use('/card', authenticator, card)

// Server listener
app.listen(5000, () => console.log("Server is running on port 5000..."))