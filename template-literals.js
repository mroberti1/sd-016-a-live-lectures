function sum(number1, number2) {
  return number1 + number2;
}

// console.log(
//   'O resultado do cálculo 2 + 7 = ' + sum(2, 7) + '. Obrigado pela atenção!'
// );

// console.log(
//   `O resultado do cálculo 2 + 7 = ${sum(2, 7)}. Obrigado pela atenção!`
// );

const result = sum(2, 2);

// console.log(
//   `O resultado do cálculo 2 + 2 = ${result}. Obrigado pela atenção!`
// );

const person = 'Bernardo';
const value = 1.99;

const email = 'Olá, ' + person + '!\n' + 'O valor da sua cobrança é ' + value + '\n' + 'Essa é uma mensagem automática!';

const emailWithTemplateLiterals = `Olá, ${person}!
O valor da sua cobrança é ${value}
Essa é uma mensagem automática!`;

console.log(emailWithTemplateLiterals);