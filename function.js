function printGreeting(name) {
  console.log('Olá, ' + name);
}

let luizVariable = 'Luiz Ricardo';
printGreeting(luizVariable);

function makeGreeting(name) {
  let text = 'E aí ' + name + '? Tudo bem com você?';
  return text;
}

let greeting = makeGreeting('Leandro');
console.log(greeting);

function sum(num1, num2) {
  return num1 + num2;
}

function canDrive(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
