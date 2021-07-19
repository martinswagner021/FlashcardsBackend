// Libraries Imports
const express = require('express')
const router = express.Router()

// Router

// Get method
router.get('/', (req, res) => {
    const { user_id } = req
    res.send({message: "hello",user:user_id})
})

// Exports
module.exports = router