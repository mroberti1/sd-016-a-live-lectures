const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDrive: true },
  { firstName: 'Marge', lastName: 'Simpson', canDrive: true },
  { firstName: 'Bart', lastName: 'Simpson', canDrive: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDrive: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDrive: false },
];

// Encontre a primeira pessoa que não sabe dirigir
// let firstUserThatCantDrive;
// for (let user of users) {
//   if (user.canDrive !== true) {
//     firstUserThatCantDrive = user;
//     break;
//   }
// }


const firstUserThatCantDrive = users.find((user) => {
  // Eu tenho que OBRIGATORIAMENTE retornar a regra de negócio que eu 
  // quero que seja satisfeita para encontrar um determinado elemento
  return user.canDrive !== true;
});

console.log(`A primeira pessoa do array que não sabe dirigir é ${firstUserThatCantDrive.firstName}`);
