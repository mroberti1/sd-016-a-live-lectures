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
    return -1; // retorna um código de erro arbitrário
  }

  const number = Number(value); // converte value para number

  if (Number.isNaN(number)) { // isNaN verifica se o valor convertido NÃO é um número
    return -2; // retorna um código de erro arbitrário
  }

  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }
  return summation;
}

// module.exports = { sum, summationOf };
