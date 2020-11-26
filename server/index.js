const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const https = require("https"),
fs = require('fs')

const options = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
}

const db = require('./db')
const monsterRouter = require('./routes/MonsterRouter')
const encounterRouter = require('./routes/EncounterRouter')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('hello World!')
})

app.use('/api', monsterRouter)
app.use('/api', encounterRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
https.createServer(options, app).listen(3030)
