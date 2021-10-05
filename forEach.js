const tropeiroIngredients = ['feijão', 'farinha', 'torresmo', 'couve', 'linguiça', 'bacon'];

// Faça o log de cada ingrediente do tropeiro:
console.log('Os ingredientes do tropeiro são:');
// for (let index = 0; index < tropeiroIngredients.length; index += 1) {
//   const ingredient = tropeiroIngredients[index];
//   console.log(`${index + 1}. ${ingredient}`);
// }

tropeiroIngredients.forEach((value, index) => {
  console.log(`${index + 1}. ${value}`);
});

const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDrive: true },
  { firstName: 'Marge', lastName: 'Simpson', canDrive: true },
  { firstName: 'Bart', lastName: 'Simpson', canDrive: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDrive: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDrive: false },
];

// Faça o log de todas as entradas no seguinte formato:
// `{Nome da pessoa} {Sobrenome da pessoa} sabe dirigir? {Resposta}`

