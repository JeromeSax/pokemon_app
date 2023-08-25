const mongoose = require('mongoose')

const pokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToFight: Boolean
})

const Poke = mongoose.model('poke', pokeSchema)

module.exports = Poke;