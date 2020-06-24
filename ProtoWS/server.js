const Schema = require('./testmessage_pb')

const Express = require('express')
const Https = require('https')
const WebSocket = require('ws')
const FileSystem = require('fs')

const app = Express()

app.use(function (req, res) {
    res.send({ msg: 'hello from server' })
})
const server = Https.createServer({
    key: FileSystem.readFileSync('key.pem'),
    cert: FileSystem.readFileSync('cert.pem'),
    passphrase: 'test'
}, app)

const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log(message)

    })

        // var message = new Schema.TestMessage();
        // message.setSometext('ProtocolBuf received')

        // var bytes = message.serializeBinary()
        // console.log(bytes)
        // // ws.send(bytes)
})

server.listen(7070, function listening() {
    console.log('Listening Server on %d', server.address().port)
})