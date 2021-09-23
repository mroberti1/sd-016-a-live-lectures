function greetings(name) {
  let message = '';
  if (name.includes('16')) {
    message = `Olá ${name}! Vamos pra cima, sempre 🚀`;
    console.log(message);
  } else {
    message = `Olá ${name}! :)`;
    console.log(message);
  }
  console.log(message);
}

// greetings('Turma 16, Tribo A');

const person = {
  name: 'Bernardo',
  age: 18,
}

console.log(person);

person['wearGlasses'] = true;

console.log(person);
