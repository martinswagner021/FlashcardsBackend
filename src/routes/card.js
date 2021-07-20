// Libraries Imports
const express = require('express')
const router = express.Router()
const URL = require('url')

// Models Imports
const Card = require('../models/card')


// Router

// Get all cards
router.get('/', async (req, res) => {
    const { user_id } = req

    // Get all the cards by user_id
    const cards = await Card.find({ creator: user_id })
    
    return res.send({ cards })
})

// Create cards
router.post('/', async (req, res) => {
    const { user_id } = req
    const { title, content } = req.body

    // Check if the fields are correctly filled up
    if(!content) {
        return res.send({error: "Your card does not have any content."})
    }

    // Create the card
    const card = await Card.create({ title: title, content: content, creator: user_id })

    return res.send({ card })
})

// Modify cards
router.put('/', (req, res) => {
    const { user_id } = req
    const { title, content } = req.body
    
    // Check if the fields are correctly filled up
    if(!content) {
        return res.send({error: "Your card does not have any content."})
    }

    

    return res.send({error: "in production..."})
})

// Delete cards
router.delete('/', async (req, res) => {
    
    // Get the id from the element to be deleted through URL query
    const { id } = URL.parse(req.url, true).query
    
    await Card.deleteOne({_id: id})
    
    return res.send({message: "Card successfully deleted."})
})

// Exports
module.exports = router