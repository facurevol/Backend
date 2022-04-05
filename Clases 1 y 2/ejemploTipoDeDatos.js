const array = [1,2,3,4,5]

const diccionario = {
    nombre: 'Facundo',
    apellido: 'Revol',
    rol: 'estudiante'
}
//esto funciona:
array.push(6);

//esto no funciona, tira error, porque es const
array = []

//esto funciona:
diccionario['pais'] = 'argentina'
diccionario.provincia = 'capital federal'

//esto no funciona, tira error, porque es const
diccionario = {
    animales: 'perros'
}

function name( params ) {
    
}