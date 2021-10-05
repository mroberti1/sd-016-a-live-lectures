const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDrive: true },
  { firstName: 'Marge', lastName: 'Simpson', canDrive: true },
  { firstName: 'Bart', lastName: 'Simpson', canDrive: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDrive: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDrive: false },
];

// Faça um algoritmo que verifica se existe ALGUMA pessoa que não dirija no array
// let isThereAnyoneThatCantDrive = false;
// for (let user of users) {
//   if (user.canDrive === false) {
//     isThereAnyoneThatCantDrive = true;
//     break;
//   }
// }

// retorna TRUE caso encontre algum elemento que satisfaça a condição, falso caso contrário
const isThereAnyoneThatCantDrive = users.some((user) => {
  return user.canDrive !== true;
});

console.log(`Existe alguém que não sabe dirigir? ${isThereAnyoneThatCantDrive}`);