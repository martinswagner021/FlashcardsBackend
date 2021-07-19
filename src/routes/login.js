// Libraries Imports
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const compare = bcrypt.compare
const jwt = require('jsonwebtoken')
const sign = jwt.sign

// Models Imports
const User = require('../models/user')

// Router
router.get('/', async (req, res) => {
    const { username, password } = req.body

    // Check if fields were correctly filled
    if( !username ) {
        return res.send({error: "Username required"})
    }
    if( !password ) {
        return res.send({error: "Password required"})
    }
    
    // Find user + password (default select = false in models)
    const user = await User.findOne({ username: username }).select('+password')
    
    //  Check if user exists
    if(!user) {
        res.send({error: "Username/Password does not match"})
    }

    // Check if password matches
    const checkPassword = await compare(password, user.password)
    
    if( !checkPassword ) {
        return res.send({error: "Username/Password does not match"})
    }
    user.password = undefined

    // JWT Authentication
    const token = sign({
            user: user.username
        },
         process.env.JWT_SECRET,
         {
             expiresIn: "5h",
             subject: user.id
         })


    res.send({ token })

})

// Exports
module.exports = router