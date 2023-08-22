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

// This allows the body of a post request
app.use(express.urlencoded({ extended: false }))

// Route home
app.get('/', (req, res) => {
    // res.send(pokemon)
    res.send(`<h1> Welcome to the <a href="/pokemon">Pokemon</a> App! <h1>`)
})

// Index
app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
    res.render('Index', {pokemon : pokemon})
})

// NEW pokemon Route
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create = Post
app.post('/pokemon', (req, res) => {

    const newPokemon = {
        name: req.body.name,
        img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase()
    }
    console.log('Created Pokemon: ', req.body)
    if(req.body.readyToFight === 'on') {
        req.body.readyToFight = true;
    } else {
        req.body.readyToFight = false;
    }

    pokemon.push(newPokemon)
    res.redirect('/pokemon') 

})

// Show
app.get('/pokemon/:id', (req, res) => {
    // res.send(pokemon)
    // res.send(req.params.id);
    res.render('Shows', {pokemon : pokemon[req.params.id]})
})



app.listen(3000, () => {
    console.log('listening');
})

