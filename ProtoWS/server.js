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
        data = Schema.TestMessage.deserializeBinary(message)
        console.log(data.toString(), "message recv from client")
        let newData = new Schema.TestMessage()
        newData.setSometext(`${data.toString()}, received on server`)
        console.log(newData.toString(), "sending to client in buffer")
        ws.send(newData.serializeBinary())
    })
})

server.listen(7070, function listening() {
    console.log('Listening Server on %d', server.address().port)
})