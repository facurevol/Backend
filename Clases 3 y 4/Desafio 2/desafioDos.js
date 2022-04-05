const fs = require('fs');

class Contenedor {
    constructor(ruta) {

        if(fs.existsSync('./'+ruta)){
            this.ruta = './'+ruta;
        }
        else{
            fs.watchFile('./'+ruta,'',err => {
                if(err) throw new Error(err.message);

                this.ruta = './'+ruta;
                console.log('ruta creada');
            });
        }    
    }

    //Guarda el producto y le asigan un ID
    async save(producto) {
        try{
            const productoConId = {
                title: producto.titel,
                price: producto.price,
                thumbnail: producto.thumbnail,
                id: 0
            }

        const ruta = await fs.promises.readFile(this.ruta, 'utf-8');
        
        let productos = []
        try {
            productos = JSON.parse(ruta);
            productoConId.id = productos[productos.lenght-1].id+1
            productos.push(productoConId);
        }
        catch(err){
            productos.push(productoConId);
        }  
        
        await fs.promises.writeFile(this.ruta,JSON.stringify(productos,null,4));

        return productoConId.id;
    }
    catch(err){
        console.error(err);
    }
}

    //Devuelve el producto con su ID
    async getById(id) {
        try{
            const ruta = await fs.promises.readFile(this.ruta, 'utf-8');
            const productos = JSON.parse(ruta);
            const producto = productos.find(p => p.id == id);
            if(producto == undefined){
                console.log('No se encuentra un producto con ese número de Id');                
                return null;
            }
            else{
                return producto;
            }
        }  
        catch(err){
            console.error(err);
        }                
    }  

    //Devuelve todos los productos
    async getAll() {
        try{
            const ruta = await fs.promises.readFile(this.ruta, 'utf-8');
            const productos = JSON.parse(ruta);

            return productos;
        }
        catch(err){
            console.error(err);
        }   
    }

    //Delete los productos por ID
    async deleteById(id) {
        try{
            const ruta = await fs.promises.readFile(this.ruta, 'utf-8');
            const productos = JSON.parse(ruta);
            const indice = productos.findIndex(p => p.id == id);
            if(indice == -1){
                console.log('No se encuentra un producto con ese número de Id');
            }
            else{
                productos.splice(indice,1);
                await fs.promises.writeFile(this.ruta,JSON.stringify(productos,null,4))
                console.log('Producto eliminado')
            }            
        }
        catch(err){
            console.error(err);
        }   
    }

    //Delete todos los productos
    async deleteAll() {
        try{            
            const productos = [];
            await fs.promises.writeFile(this.ruta, JSON.stringify(productos,null,4));
            console.log('Todos los productos fueron eliminados')                      
        }
        catch(err){
            console.error(err);
        }   
    }
}

const productoCero = {
    title: 'Prodcuto Cero',
    price: 234.60,
    thumbnail: "sinImagen.png"
}

const contenedor = new Contenedor('pruebaCero.txt');

const pruebaCero = async ()=>{
    //Guardar Producto
    const indice = await contenedor.save(productoCero);
    console.log("Producto agregado con indice: " + indice);

    //Mostrar producto por Id si existe
    const producto = await contenedor.getById(2);
    if(producto!=null){
        console.log(producto);
    }    

    //Mostrar Todos los Productos
    const productos = await contenedor.getAll();
    console.log(productos);

    //Borrar producto si existe
    await contenedor.deleteById(2);

    //Borrar Todos los Productos
    await contenedor.deleteAll();
}

pruebaCero();