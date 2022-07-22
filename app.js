const express = require('express')
const file = require('fs');



const data = require('./data')



const api = express()

const HOST = 'localhost'
const PORT = 9000;

api.get('/', (req, res) => {
res.send('This is how api works')

})

api.get('/people', (req, res) => {
   res.status(200)
    res.json(data)
    res.send(data)

})

api.listen(PORT, console.log(`API is running on ${HOST}:${PORT}`))