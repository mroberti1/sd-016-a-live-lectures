const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Reduzir esse array de strings e transformá-lo na seguinte string:
'Phrase: a long time ago in a galaxy far far away.'

const phrase = epic.reduce((accumulator, currentValue, index, array) => {
  // console.log(`acc = ${accumulator}`);
  // console.log(`curr = ${currentValue}`);
  // console.log(`retorno -> ${accumulator} ${currentValue}`);

  if (index === array.length - 1) {
    return `${accumulator} ${currentValue}.`;
  }

  return `${accumulator} ${currentValue}`;
}, 'Phrase:');
console.log(phrase);

// 1a iteração
// acc = 'Phrase:'
// currentValue = 'a'
// retorno -> 'Phrase: a'

// 2a iteração
// acc = 'Phrase: a'
// currentValue = 'long'
// retorno -> 'Phrase: a long'

// 3a iteração
// acc = 'Phrase: a long'
// currentValue = 'time'
// retorno -> 'Phrase: a long time'

// 4a iteração
// acc = 'Phrase: a long time'
// currentValue = 'ago'
// retorno -> 'Phrase: a long time ago'

// Última iteração
// acc = 'Phrase: a long time ago in a galaxy far far'
// currentValue = 'away'
// retorno -> 'Phrase: a long time ago in a galaxy far far away'