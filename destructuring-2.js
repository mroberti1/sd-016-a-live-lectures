// Faça uma função que receba um objeto representando um animal e retorne uma mensagem com as informações desse animal
const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg',
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700,
  }
};

const animalDescription = ({ name, commonName, weightRange }) => {
  const { min, max, measurementUnit = '' } = weightRange;
  return `${commonName} (${name}) weighs around ${min}${measurementUnit} - ${max}${measurementUnit}`;
};

// Resultado esperado ao chamar animalDescription passando o objeto lion:
// 'Lion (Panthera leo) weighs around 186.55kg - 225kg'
console.log(animalDescription(lion));

// Resultado esperado ao chamar animalDescription passando o objeto blueWhale:
// 'Blue whale (Balaenoptera musculus) weighs around 45t - 173t'
console.log(animalDescription(blueWhale));

// Resultado esperado ao chamar animalDescription passando o objeto polarBear:
// 'Polar Bear (Ursus maritimus) weighs around 350 - 700'
console.log(animalDescription(polarBear));