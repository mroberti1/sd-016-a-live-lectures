const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDrive: true },
  { firstName: 'Marge', lastName: 'Simpson', canDrive: true },
  { firstName: 'Bart', lastName: 'Simpson', canDrive: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDrive: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDrive: false },
];

// TODAS as pessoas desse array sabem dirigir?
// let everyoneCanDrive = true;
// for (let user of users) {
//   if (user.canDrive === false) {
//     everyoneCanDrive = false;
//     break;
//   }
// }

const everyoneCanDrive = users.every((element) => element.canDrive === true);

console.log(`Todas as pessoas sabem dirigir? ${everyoneCanDrive}`);
