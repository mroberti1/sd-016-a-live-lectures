const person = {
  name: 'Bernardo',
  lastname: 'Salgueiro', // trailing comma
  address: {
    city: 'BH',
    street: 'Rua X',
    number: 123,
  }
};

// console.log(`Olá, ${person.name} ${person['lastname']}`);

person.age = 36;
person['canPlayPiano'] = false;

// console.log(person);

// console.log(typeof person);

const favoriteNumber = 4;
// console.log(typeof favoriteNumber);

const numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers);

const keysOfPerson = Object.keys(person);
// console.log(keysOfPerson);

const valuesOfPerson = Object.values(person);
// console.log(valuesOfPerson);

const entriesOfPerson = Object.entries(person);
console.log(entriesOfPerson);

// console.log(entriesOfPerson[2][1].number);