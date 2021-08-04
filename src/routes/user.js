const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res) => {

    const { user_id } = req
    
    const { username } = await User.findOne({ _id: user_id })

    res.send({ username: username })

})

module.exports = router