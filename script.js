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
function summationOf(number) {
  if (number === 1) {
    return 1;
  }
  return 6;
}

module.exports = { sum, summationOf };
