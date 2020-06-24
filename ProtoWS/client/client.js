'use strict'

const Schema = require('./testmessage_pb')
const WebSocket = require('ws')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const ws = new WebSocket('wss://localhost:7070/', {
    origin: 'https://localhost:7070'
})

ws.on('open', function open() {
    console.log('connected')
    let Message = new Schema.TestMessage();
    Message.setSometext("HIIIIHI")
    console.log(Message.getSometext(), "this will be sended to server")
    let binData = Message.serializeBinary()
    console.log(Schema.TestMessage.deserializeBinary(binData).toString())
})

ws.on('close', function close() {
    console.log('disconnected')
})

ws.on('message', function incoming(data, flags) {
    console.log(data, "this is a buffer value")
    var bytes = Array.prototype.slice.call(data, 0)
    ws.send(data)
    var message = proto.TestMessage.deserializeBinary(bytes)
    console.log(message.getSometext())
    ws.close()
})