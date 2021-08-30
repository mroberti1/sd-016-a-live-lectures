let person = {
  name: 'Eduardo',
  lastName: 'Miyazaki',
  age: 19,
  canDrive: true,
  movies: ['A Origem', 'A Procura da Felicidade'],
  favoriteNumbers: [8, 6],
  address: {
    street: 'Rua XYZ',
    number: 243,
    city: 'Mogi das Cruzes'
  }
}

// Existem duas notações para acessar propriedades (chaves) de um objeto

// 1. Notação por ponto (dot notation) => object.property
console.log(person.lastName);

// 2. Notação de colchetes (bracket notation) => object['property']
// console.log(person['age']);

// for (let key in person) {
//   // console.log(key);
//   console.log(person[key]);
// }

// Adicionar novas entradas (propriedades) no objeto
person.favoriteAlbums = ['Let it be', 'Abbey Road'];

person['favoriteColors'] = ['Azul', 'Branco'];

console.log(person);