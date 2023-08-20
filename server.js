const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');


// setting up engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {pokemon : pokemon})
})



app.listen(3000, () => {
    console.log('listening');
})