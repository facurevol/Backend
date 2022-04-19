const socket = io()

socket.on('mi mensaje', data => {
    console.log('(cliente) ' + data)

    socket.emit('msg-cliente', `(cliente) recibi: ${data}`)
})

socket.on('heartbeat', () => {
    console.log('Todo ok')
})

function saludar() {
    socket.emit('saludar', 'saludos desde el cliente')
}

const botonSaludar = document.getElementById('botonSaludar')
botonSaludar.addEventListener('click', e => {
    saludar()
})