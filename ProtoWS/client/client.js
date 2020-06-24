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
    let binData = Message.serializeBinary()
    ws.send(binData)
})

ws.on('close', function close() {
    console.log('disconnected')
})

ws.on('message', function incoming(data, flags) {
    console.log(data, "message recv in buffer")
    let recvData = Schema.TestMessage.deserializeBinary(data)
    console.log(recvData.toString() + ": " + "serialized string value of message recv")
})