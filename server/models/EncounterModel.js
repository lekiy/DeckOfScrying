const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Encounter = new Schema(
    {  
        name: {type: String, required: true}, 
        encounterStarted: {type:Boolean, required: true, default: false},
        encounterIndex: {type: Number, required: true, default: 0},
        combatants: {type: Array, required: true, default: []},
    },
    {timestamps: true},
)

module.exports = mongoose.model('encounters', Encounter)

const sample = {
    "name": "Encounter1",
    "combatants": [],
}