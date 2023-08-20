const express = require('express');
const app = express();

const pokemon = require('./models/pokemon');



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('views/Index.jsx')
})



app.listen(3000, () => {
    console.log('listening');
})