const express = require('express')

const MonsterCtrl = require('../controllers/MonsterController')

const router = express.Router()

router.post('/monster', MonsterCtrl.createMonster)
router.put('/monster/:id', MonsterCtrl.updateMonster)
router.delete('/monster:id', MonsterCtrl.deleteMonster)
router.get('/monsters', MonsterCtrl.getMonsters)
router.get('/monster:id', MonsterCtrl.getMonsterById)


module.exports = router
