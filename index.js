const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


const cors = require('cors');

app.use(cors());

const locations = require('./data/locations.json')
const hotels = require('./data/hotels.json')

app.get('/', (req, res) => {
    res.send('Travel Guru')
})

app.get('/locations', (req, res) => {
    res.send(locations)
})

app.get('/locations/:id', (req, res) => {
    const id = req.params.id;
    const location = locations.find(location => location.id == id)
    res.send(location)
})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const hotel = hotels.filter(ht => ht.category_id == id)
    res.send(hotel)
})

app.listen(port, () => {
    console.log(`Travel Guru running on ${port}`)
})