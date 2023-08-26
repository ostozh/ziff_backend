const express = require('express'),
    app = express(),
    router = require('./src/api/routes/index')

const Gun = require('gun')
require('gun/sea')

const port = require('./config/config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(Gun.serve)

app.use('/api/v0.1', router)

const server = app.listen(port)
const gun = new Gun({ web: server })

const user = gun.user()


app.get('/', (req, res) => {
    res.send(200)
})

global.Gun = Gun
global.gun = gun

console.log('server started on http://localhost:%d', port)

module.exports = { gun, user, router }