require('dotenv').config();
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const Poke = require('./models/poke.js');
const mongoose = require('mongoose');

// CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

// Connecting to mongoDB 
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
})

// setting up engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({ extended: false }))

// Route home
app.get('/', (req, res) => {
    // res.send(pokemon)
    res.send(`<h1> Welcome to the <a href="/pokemon">Pokemon</a> App! <h1>`)
})

// ROUTES
// Index
app.get('/pokemon', async function (req, res) {
    const foundPokemon = await Poke.find({})
    res.render('Index', {
        pokemon: foundPokemon
    })
})

// NEW pokemon Route
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create = Post
app.post('/pokemon', async (req, res) => {
    if (req.body.readyToFight === 'on') {
        req.body.readyToFight = true;
    } else {
        req.body.readyToFight = false;
    }
    const newPokemon = await Poke.create({
        name: req.body.name,
        img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase(),
        readyToFight: req.body.readyToFight
    })
    // console.log('Created Pokemon: ', req.body)
    console.log(newPokemon)
    // pokemon.push(newPokemon)
    res.redirect('/pokemon')

})

// Show
app.get('/pokemon/:id', async (req, res) => {
    const onePokemon = await Poke.findById(req.params.id)
    // res.send(pokemon)
    // res.send(req.params.id);
    res.render('Shows', {
        // pokemon : pokemon[req.params.id]
        pokemon: onePokemon
    })
})



app.listen(3000, () => {
    console.log('listening');
})

