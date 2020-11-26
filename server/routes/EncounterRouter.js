const express = require('express')

const EncounterCtrl = require('../controllers/EncounterController')

const router = express.Router()

router.post('/encounter', EncounterCtrl.createEncounter)
router.put('/encounter/:id', EncounterCtrl.updateEncounter)
router.delete('/encounter:id', EncounterCtrl.deleteEncounter)
router.get('/encounters', EncounterCtrl.getEncounters)
router.get('/encounter:id', EncounterCtrl.getEncounterById)


module.exports = router
