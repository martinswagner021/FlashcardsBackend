// Libraries Imports
const express = require('express')
const router = express.Router()

// Models Imports
const Card = require('../models/card')

// Router

// Get all cards
router.get('/', async (req, res) => {
    const { user_id } = req

    const cards = await Card.find({ creator: user_id })
    
    res.send({ cards })
})
// Create cards
router.post('/', async (req, res) => {
    const { user_id } = req
    const { title, content } = req.body

    if(!content) {
        return res.send({error: "Your card does not have any content."})
    }

    const card = await Card.create({ title: title, content: content, creator: user_id })

    res.send({ card })
})

// Modify cards
router.put('/', (req, res) => {
    const { user_id } = req
    res.send({error: "hello",user:user_id})
})

// Delete cards
router.delete('/', (req, res) => {

})

// Exports
module.exports = router