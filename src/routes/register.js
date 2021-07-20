// Libraries Imports
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const hash = bcrypt.hash

// Models Imports
const User = require('../models/user')

// Router
router.post('/', async (req, res) => {
    const { username, password } = req.body

    // Check if fields were correctly filled
    if( !username ) {
        return res.send({error: "Username required."})
    }
    if( !password ) {
        return res.send({error: "Password required."})
    }

    // Check if user already exists
    const userAlreadyExists = await User.findOne({ username: username },)

    if( userAlreadyExists ) {
        return res.send({error: "User already exists."})
    }

    // Password cryptography
    const passwordHash = await hash(password, 10)

    // Creation of the user
    const user = await User.create({ username: username, password:passwordHash })
    user.password = undefined

    res.send({ user })

})

// Exports
module.exports = router