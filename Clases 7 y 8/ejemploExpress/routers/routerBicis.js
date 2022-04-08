const { Router } = require("express")

const routerBicis = new Router()

routerBicis.get('/', (req, res) => {
    res.json({ mensaje: 'recibí una petición con método "get"' })
})

routerBicis.post('/', (req, res) => {
    res.json({ mensaje: 'recibí una petición con método "post"' })
})

module.exports = routerBicis