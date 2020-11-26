const Monster = require('../models/MonsterModel')

createMonster = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a monster',
        })
    }

    const monster = new Monster(body)

    if(!monster) {
        return res.status(400).json({success: false, error:err})
    }

    monster
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: monster._id,
            message: 'Monster created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Monster not created!',
        })
    })
}

updateMonster = async (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Monster.findOne({_id: req.params.id}, (err, monster) => {
        if(err){
            return res.status(404).json({
                err,
                message: 'Monster not found',
            })
        }
        monster.name = body.name
        monster.thumbnail = body.thumbnail
        monster.armor = body.armor
        monster.armorType = body.armorType
        monster.initMod = body.initMod
        monster.hpFormula = body.hpFormula
        monster.hpFlat = body.hpFlat
        monster.challengeRating = body.challengeRating

        monster
        .save()
        .then(()=>{
            return res.status(200).json({
                success: true,
                id: monster._id,
                message:'Monster updated!'
            })
        })
    })
}

    deleteMonster = async (req, res) => {
        await Monster.findOneAndDelete({_id: req.params.id}, (err, monster)=>{
            if(err){
                return res.status(400).json({success: false, error: err})
            }

            if(!movie){
                return res
                .status(400)
                .json({success: false, error: `Monster not found`})
            }

            return res.status(200).json({success: true, data: monster})
        }).catch(err => console.log(err))
    }

    getMonsterById = async(req, res) => {
        await Monster.findOne({_id:req.params.id}, (err, monster) => {
            if(err){
                return res.status(400).json({success: false, error: err})
            }

            if(!monster) {
                return res
                .status(404)
                .json({success: false, error: `Monster not found`})
            }
            return res.status(200).json({success: true, data: monster})
        }).catch(err => console.log(err));
    }

    getMonsters = async(req, res) => {
        await Monster.find({}, (err, monsters) => {
            if(err){
                return res.status(400).json({success: false, error: err})
            }
            if(!monsters.length){
                return res.status(404).json({success: false, error: `Monster not found`})
            }
            return res.status(200).json({success: true, data: monsters})
        }).catch(err=> console.log(err))
    }

module.exports = {
    createMonster,
    updateMonster,
    deleteMonster,
    getMonsters,
    getMonsterById,
}