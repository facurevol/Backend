const express = require('express')
const Clases = require('./Producto')
const { Router } = express
//const routerProductos = require('./routes/api/productos')
const handlebars = require('express-handlebars')
const pug = require('pug')

const Producto = Clases.Producto
const Productos = Clases.Productos



//LISTA DE PRODUCTOS
const productos = new Productos()

//PRUEBA
const productoPrueba1 = new Producto(0,'Zapatilla',10,'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/nike-dunk-512.png')
const productoPrueba2 = new Producto(1,'Gorra',5,'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/cap-512.png')
const productoPrueba3 = new Producto(2,'Remera',28,'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack/110/T-Shirt-2-512.png')

productos.agregarProducto(productoPrueba1)
productos.agregarProducto(productoPrueba2)
productos.agregarProducto(productoPrueba3)

const app = express()

//HANDLEBARS 
app.engine('hbs', handlebars.engine({
     extname: '.hbs',
     defaultLayout: 'index.hbs',
     layoutsDir: __dirname + '/views/hbs/layout',
     partialsDir: __dirname + '/views/hbs/partials'
}))
app.set('view engine','hbs')
app.set('views','./views/hbs')


//PUG
// app.set('view engine','pug')
// app.set('views','./views/pug')

//EJS
//app.set('view engine','ejs')
//app.set('views','./views/ejs')


//app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

//app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('form');
});

app.get('/productos', (req, res) => {
    lista = productos.listarProductos();
    res.render('list', {lista});
});

app.post('/productos', (req,res)=>{
    const title = req.body.title
    const price = req.body.price
    const thumbnail = req.body.thumbnail
    const prod = new Producto(productos.obtenerIDMax()+1,title,price,thumbnail)
    productos.agregarProducto(prod)
    res.redirect('/')
})


//app.use('/api/productos',routerProductos)