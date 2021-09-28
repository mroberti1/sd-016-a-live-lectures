function sum(a, b) {
  return a + b;
}

/**
 * Implemente uma função `summationOf(number)` que recebe um número inteiro e retorna o seu [somatório](https://pt.wikipedia.org/wiki/Somat%C3%B3rio).
 *
 * Por exemplo:
 *
 * - `summationOf(1)` retorna 1: soma de 1 até 1 = 1
 * - `summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * - `summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
 */
function summationOf(value) {
  if (value === '') {
    throw Error('summationOf deve receber um valor'); // Error é um tipo especial que serve para ser arremessado
  }

  const number = Number(value); // converte value para number

  if (Number.isNaN(number)) { // isNaN verifica se o valor convertido NÃO é um número
    throw Error('summationOf deve receber apenas números');
  }

  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }
  return summation;
}

module.exports = { sum, summationOf };
