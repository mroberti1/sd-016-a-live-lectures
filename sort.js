// const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', '4 Queijos'];

// console.log(`Antes de ordernar: ${pizzas}`);
// pizzas.sort();
// console.log(`Depois de ordernar: ${pizzas}`);

const numbers = [11, 1, 10, 2, 21, 10, 9];
console.log(`Antes de ordenar: ${numbers}`);

// numbers.sort((a, b) => {
//   // Se essa função retornar um VALOR POSITIVO,
//   // o elemento B vai para um índice ANTERIOR em relação a A

//   // Se essa função retornar um VALOR NEGATIVO,
//   // o elemento A vai para um índice ANTERIOR em relação a B

//   // Se essa função retornar ZERO, A e B permanecem onde estão

//   if (a > b) {
//     // retornar um número POSITIVO para que B fique antes de A
//     return 1;
//   } else if (b > a) {
//     // retornar um número NEGATIVO para que A fique antes de B
//     return -1;
//   } else {
//     // retornar ZERO, para que os elementos permaneçam onde estão
//     return 0;
//   }
// });
console.log(`Depois de ordenar: ${numbers}`);

numbers.sort((a, b) => a - b);


// E se quisermos ordenar um array de objetos???
// const users = [
//   { firstName: 'Homer', lastName: 'Simpson', canDrive: true, age: 42 },
//   { firstName: 'Marge', lastName: 'Simpson', canDrive: true, age: 40 },
//   { firstName: 'Bart', lastName: 'Simpson', canDrive: false, age: 16 },
//   { firstName: 'Lisa', lastName: 'Simpson', canDrive: false, age: 18 },
//   { firstName: 'Maggie', lastName: 'Simpson', canDrive: false, age: 3 },
// ];

// Ordenar baseado na idade (age) dos elementos do array