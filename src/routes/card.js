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
    
    // Get a specific card id, in case it is queried
    const { card } = URL.parse(req.url, true).query

    // Check if the user searches for a specific card or get all cards 
    const result = card ? await Card.find({_id: card, creator: user_id}) : await Card.find({creator:user_id})
    
    return res.send({ result })
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
    const result = await Card.create({ title: title, content: content, creator: user_id })

    return res.send({ result })
})

// Modify cards
router.put('/', async (req, res) => {
    const { user_id } = req
    const { title, content } = req.body

    // Check if the fields are correctly filled up
    if(!content) {
        return res.send({error: "Your card does not have any content."})
    }
    
    // Get the card id from the elemento to be modified through URL query
    const { card } = URL.parse(req.url, true).query

    // Find and update the data
    await Card.updateOne({_id: card}, {title: title, content: content})

    return res.send({message: "Card successfully modified."})
})

// Delete cards
router.delete('/', async (req, res) => {
    
    // Get the card id from the element to be deleted through URL query
    const { card } = URL.parse(req.url, true).query
    
    await Card.deleteOne({_id: card})
    
    return res.send({message: "Card successfully deleted."})
})

// Exports
module.exports = router