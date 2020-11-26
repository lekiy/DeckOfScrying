const Encounter = require('../models/EncounterModel')

createEncounter = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a Encounter',
        })
    }

    const encounter = new Encounter(body)

    if(!Encounter) {
        return res.status(400).json({success: false, error:err})
    }

    encounter
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            data: encounter,
            message: 'Encounter created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Encounter not created!',
        })
    })
}

updateEncounter = async (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Encounter.findOne({_id: req.params.id}, (err, Encounter) => {
        if(err){
            return res.status(404).json({
                err,
                message: 'Encounter not found',
            })
        }
        Encounter.name = body.name
        Encounter.encounterStarted = body.encounterStarted
        Encounter.encounterIndex = body.encounterIndex
        Encounter.combatants = body.combatants

        Encounter
        .save()
        .then(()=>{
            return res.status(200).json({
                success: true,
                id: Encounter._id,
                message:'Encounter updated!'
            })
        })
    })
}

    deleteEncounter = async (req, res) => {
        await Encounter.findOneAndDelete({_id: req.params.id}, (err, Encounter)=>{
            if(err){
                return res.status(400).json({success: false, error: err})
            }

            if(!movie){
                return res
                .status(400)
                .json({success: false, error: `Encounter not found`})
            }

            return res.status(200).json({success: true, data: Encounter})
        }).catch(err => console.log(err))
    }

    getEncounterById = async(req, res) => {
        await Encounter.findOne({_id:req.params.id}, (err, Encounter) => {
            if(err){
                return res.status(400).json({success: false, error: err})
            }

            if(!Encounter) {
                return res
                .status(404)
                .json({success: false, error: `Encounter not found`})
            }
            return res.status(200).json({success: true, data: Encounter})
        }).catch(err => console.log(err));
    }

    getEncounters = async(req, res) => {
        await Encounter.find({}, (err, Encounters) => {
            if(err){
                return res.status(400).json({success: false, error: err})
            }
            if(!Encounters.length){
                return res.status(404).json({success: false, error: `Encounter not found`})
            }
            return res.status(200).json({success: true, data: Encounters})
        }).catch(err=> console.log(err))
    }

module.exports = {
    createEncounter,
    updateEncounter,
    deleteEncounter,
    getEncounters,
    getEncounterById,
}