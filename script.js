const person = {
  name: 'Jackson',
  lastName: 'Pires',

  greet: function(nameOfTheOtherPerson, callback) {
    // Verificar se callback existe
    if (callback === undefined) {
      return 'Olá!';
    }
    const greetingMessage = callback(nameOfTheOtherPerson);
    return greetingMessage;
  }
};

const loveGreeting = (name) => {
  return `Olá ${name}, minha pessoa queridíssima!!!`;
}

const badMoodGreeting = (name) => {
  return `Oi, ${name}`;
}

function formalGreeting(name) {
  return `Olá ${name}, como você está?`;
}

// Quando o Tio Jack encontra alguém de quem ele gosta
console.log(person.greet('Flavinho', loveGreeting));

// Quando ele está de mau humor
console.log(person.greet('Flavinho', badMoodGreeting));

// Cumprimento
console.log(person.greet('Gisele', formalGreeting));


const megaSenaNumbers = [1, 3, 50, 25, 12, 10];

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  console.log(megaSenaNumbers[index]);
}

megaSenaNumbers.forEach((value) => {
  console.log(value);
});
