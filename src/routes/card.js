// Libraries Imports
const express = require('express')
const router = express.Router()

// Router
router.get('/', (req, res) => {
    res.send({message: "hello"})
})

// Exports
module.exports = router