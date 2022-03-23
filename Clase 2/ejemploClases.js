class Cliente {
    constructor(name, date, direction){
        this.name = name;
        this.date = date;
        this.direction = direction;
    }


    verStringDePresentacion(){
        return `nombre: ${this.name}`
    }
}

const cliente1 = new Cliente('Facundo', '2022-03-12', 'Cba');
const cliente2 = new Cliente('Guadalupe', '2022-03-13', 'Cba');

console.log(cliente1);
console.log(cliente2);

console.log(cliente1.verStringDePresentacion);
console.log(cliente2.verStringDePresentacion);