const express = require('express')

const register = require('./register')
const login = require('./login')

const app = express()

app.use(express.json())

app.use('/register', register)
app.use('/login', login)

app.listen(5000, () => console.log("Server is running on port 5000..."))