const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Encounter = new Schema(
    {
        name: {type: String, required: true}, 
        encounterStarted: {type:Boolean, required: true},
        encounterIndex: {type: Number, required: true},
        combatants: {type: Array, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('encounters', Encounter)

const sample = {
    "name": "Encounter1",
    "combatants": [],
}