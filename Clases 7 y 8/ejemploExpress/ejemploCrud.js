const routerAutos = require('./routers/routerAutos.js')
const routerBicis = require('./routers/routerBicis.js')

const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/autos', routerAutos)
app.use('/api/bicis', routerBicis)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))