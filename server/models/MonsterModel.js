const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Monster = new Schema(
    {
        name: {type: String, required: true}, 
        thumbnail: {type: String, required: false}, 
        armor: {type: Number, required: true},
        armorType: {type: String, required: true},
        initMod: {type: Number, required: true},
        hpFormula: {type: String, required: true},
        hpFlat: {type: Number, required: true},
        challengeRating: {type: Number, required: true}
    },
    {timestamps: true},
)

module.exports = mongoose.model('monsters', Monster)

const sample = {
    "name": "Giant Centipede",
    "thumbnail": "giant-centipede.png",
    "armor": 13,
    "armorType":"natural",
    "initMod":2,
    "hpFormula":"1d6+1",
    "hpFlat":4,
    "challengeRating":0.25
}