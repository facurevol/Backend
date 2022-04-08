const express = require('express')
const { Router } = express

const Clases = require('./productos.js')

const Producto = Clases.Producto
const Productos = Clases.Productos

const app = express()
const router = Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.static('public'))

//LISTA DE PRODUCTOS
const productos = new Productos()

//PRODUCTOS
router.get('/', (req, res) => {
    res.send(productos.listarProductos())
})

//PRODUCTO POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    const prod = productos.listarProductoPorID(id)
    if(prod != null){
        res.send(prod)
    }
    else{
        res.send({error: 'producto no encontrado'})
    }
})

//RECIBE Y AGREGA UN PRODUCTO POR FORM Y LO DEVUELVE CON UN ID ASIGNADO
router.post('/', (req, res) => {
    const title = req.body.title
    const price = req.body.price
    const thumbnail = req.body.thumbnail
    const prod = new Producto(productos.obtenerIDMax()+1,title,price,thumbnail)
    productos.agregarProducto(prod)
    res.send(productos.listarProductoPorID(productos.obtenerIDMax()))
})

//RECIBE Y ACTUALIZA EL PRODCUTO POR SI ID
router.put('/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const price = req.body.price
    const thumbnail = req.body.thumbnail
    let prod = productos.listarProductoPorID(id)
    if(prod != null){
        productos.borrarProductoPorID(id)
        prod = new Producto(id,title,price,thumbnail)
        productos.agregarProducto(prod)
        res.json({
            result: 'Actualizado',
            producto: prod,
            ID: id
        })
    }
    else{
        res.send({error: 'producto no encontrado'})
    }
})

//ELIMINA EL PRODUCTO POR SU ID
router.delete('/:id', (req, res) => {
    const id = req.params.id
    productos.borrarProductoPorID(id)
    res.json({
        result: 'Borrado',
        ID: id
    })
})

app.use('/api/productos',router)