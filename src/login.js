const express = require('express')
const bcrypt = require('bcrypt')
const compare = bcrypt.compare

const User = require('./models/user')

const router = express.Router()

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


    res.send({ user })

})

module.exports = router