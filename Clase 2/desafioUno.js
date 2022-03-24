class Usuario {
    constructor(name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }

    getFullName(){
        return `Nombre completo: ${this.name} ${this.surname}`        
    }

   
    
    

   countPets(){
        return this.pets.length
   }

   getBooks() {      
    this.books.forEach(book => {
        console.log(book.title)
    });
           
  }
     
}

const user1 = new Usuario('Florencia', 'Perez', [{title: 'El Señor de los anillos', author: 'William Golding'}, {title: 'Fundacion', author: 'Isaac Asimov'}], ['perro', 'gato', 'conejo']);
const user2 = new Usuario('Facundo', 'Revol', [{title: 'El Señor de los anillos', author: 'William Golding'}, {title: 'Fundacion', author: 'Isaac Asimov'}], ['perro', 'conejo']);
const user3 = new Usuario('Clara', 'Hummer', [{title: 'El Señor de los anillos', author: 'William Golding'}, {title: 'Fundacion', author: 'Isaac Asimov'}], ['gato', 'conejo']);


//getFullName:
console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());

console.log(user3.addPets());

//add pets:
user1.pets.push('loro');
user2.pets.push('gato');
user3.pets.push('canario');

console.log(user1.pets);
console.log(user2.pets);
console.log(user3.pets);

//add books:
user1.books.push({title: 'El libro 2', author: 'Autor 2'});
user2.books.push({title: 'El libro 3', author: 'autor 3'});
user3.books.push({title: 'El libro 4', author: 'Autor 4'});

console.log(user1.books);
console.log(user2.books);
console.log(user3.books);

//countPets:
console.log(user1.countPets());
console.log(user2.countPets());
console.log(user3.countPets());

//getBooks:
console.log(user1.getBooks());
console.log(user2.getBooks());
console.log(user3.getBooks());
