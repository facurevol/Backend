const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer, Socket } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

app.get('/', () => {
    res.send('OK')
})

io.on('connection', (socket) => {
    console.log('Usuario conectado ' + socket.id)
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')

    socket.on('msg-cliente', data => {
        console.log(`(server) recibi: ${data}`)
    })

    socket.on('saludar', data => {
        console.log(`(server) recibi: ${data}`)
    })

    setInterval(() => { socket.emit('heartbeat', 'estoy vivo') }, 3000)
})

const server = httpServer.listen(8080, () => {
    console.log(`Servidor conectado en puerto ${server.address().port}`)
})