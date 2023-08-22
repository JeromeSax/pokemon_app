const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');


// setting up engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    // console.log('I run all routes!')
    next();
})



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {pokemon : pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    // res.send(pokemon)
    // res.send(req.params.id);
    res.render('Shows', {pokemon : pokemon[req.params.id]})
})



app.listen(3000, () => {
    console.log('listening');
})

