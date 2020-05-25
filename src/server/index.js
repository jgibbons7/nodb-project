const express = require('express')
const app = express()
const namesCtrl = require('./controllers/namesCtrl')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/mtgtracker', namesCtrl.fillInFriends)
app.post('/api/mtgtracker', namesCtrl.addPlayer)
app.put('/api/mtgtracker/:id', namesCtrl.updatePlayer)
app.delete('/api/mtgtracker/:id', namesCtrl.deletePlayer)

app.listen(SERVER_PORT, () => console.log(`Tracking rage on ${SERVER_PORT}`))

