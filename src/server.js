const express = require('express')
const Test = require('./models/user')

const app = express()

app.get('/', async (req, res) => {
    
    try {
        
        const test = await Test.create({name:"noch ein anderer test"})
        res.end("test")
        
    } catch (error) {
        return res.end({error: 'Something Failed'})
    }   
})

app.listen(5000, () => console.log("Server is running on port 5000..."))