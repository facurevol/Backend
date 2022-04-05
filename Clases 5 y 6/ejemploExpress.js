const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/llegada', (req, res) => {
    res.send('hola mundo')
})

app.get('/salida', (req, res) => {
    res.send('chau mundo')
})

const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`))


