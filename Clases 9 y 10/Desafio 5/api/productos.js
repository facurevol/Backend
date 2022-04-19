const Clases = require('../Producto')
const express = require('express')

const routerProductos = new express.Router()

//PRODUCTOS
routerProductos.get('/', (req, res) => {
    res.json(productos.listarProductos())
})

//PRODUCTO POR ID
routerProductos.get('/:id', (req, res) => {
    const id = req.params.id
    const prod = productos.listarProductoPorID(id)
    if(prod != null){
        res.json(prod)
    }
    else{
        res.json({error: 'producto no encontrado'})
    }
})

//RECIBE Y AGREGA UN PRODUCTO POR FORM Y LO DEVUELVE CON UN ID ASIGNADO
routerProductos.post('/', (req, res) => {
    const title = req.body.title
    const price = req.body.price
    const thumbnail = req.body.thumbnail
    const prod = new Producto(productos.obtenerIDMax()+1,title,price,thumbnail)
    productos.agregarProducto(prod)
    res.json(productos.listarProductoPorID(productos.obtenerIDMax()))
})

//RECIBE Y ACTUALIZA EL PRODCUTO POR SI ID
routerProductos.put('/:id', (req, res) => {
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
        res.json({error: 'producto no encontrado'})
    }
})

//ELIMINA EL PRODUCTO POR SU ID
routerProductos.delete('/:id', (req, res) => {
    const id = req.params.id
    productos.borrarProductoPorID(id)
    res.json({
        result: 'Borrado',
        ID: id
    })
})


module.exports = routerProductos;