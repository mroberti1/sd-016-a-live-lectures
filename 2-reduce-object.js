const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

// Reduzir esse array de objetos e transformá-lo em um ÚNICO objeto igual a esse:
// {
//    'Adriano Imperador': 'didico@futebol.br',
//    'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//    'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
//    'Túlio Maravilha': 'deputado@futebol.br'
// }

// const obj = {
//   first: 'value',
//   'second property': true,
//   third: 10,
// }
// obj['cris'] = 'muito linda';
// console.log(obj);

const objectPlayers = players.reduce((accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;
  return accumulator;
}, {});

console.log(objectPlayers);

// 1a iteração
// acc = {}
// currentValue = { fullName: 'Adriano Imperador', email: 'didico@futebol.br' }
// retorno -> { 'Adriano Imperador': 'didico@futebol.br' }

// 2a iteração
// acc = { 'Adriano Imperador': 'didico@futebol.br' }
// currentValue = { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' }
// retorno -> 
// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Ronaldinho Gaúcho', 'bruxo@futebol.br'
// }

// 3a iteração
// acc = 
// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Ronaldinho Gaúcho': 'bruxo@futebol.br'
// }
// currentValue = { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' }
// retorno -> 
// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Ronaldinho Gaúcho', 'bruxo@futebol.br',
//     'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// }

// 4a iteração
// acc = 
// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Ronaldinho Gaúcho', 'bruxo@futebol.br',
//     'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// }
// currentValue = { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' }
// retorno -> 
// {
//     'Adriano Imperador': 'didico@futebol.br',
//     'Ronaldinho Gaúcho', 'bruxo@futebol.br',
//     'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
//     'Túlio Maravilha': 'deputado@futebol.br',
// }

