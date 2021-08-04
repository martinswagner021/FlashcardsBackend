// Libraries Imports
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Routes Imports
const register = require('./routes/register')
const login = require('./routes/login')
const card = require('./routes/card')
const user = require('./routes/user')

// Middlewares Imports
const authenticator = require('./middlewares/authenticator')

// Creation of the app
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.use(cors())

// Routes
app.use('/register', register)
app.use('/login', login)
app.use('/card', authenticator, card)
app.use('/user', authenticator, user)

// Server listener
app.listen(port, () => console.log(`Server is running on port ${port}...`))