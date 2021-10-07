const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array com for
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor = sumWithFor + numbers[index];
}
console.log(`O somatorio do array com for é ${sumWithFor}.`);

// numbers.reduce(funcao, valor inicial do acumulador)

const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(`O somatório do array com reduce é ${sumWithReduce}`);

// Somente os números pares

const sumEvenNumbersWithReduce = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);
console.log(`A soma dos números pares é ${sumEvenNumbersWithReduce}`);

const sumEvenNumbersWithReduceChain = numbers
  .filter((value) => value % 2 === 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
