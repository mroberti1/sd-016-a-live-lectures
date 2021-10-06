const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' }
];

const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centroeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' },
];

const cities = [
  { state: 'AM', name: 'Manaus' , region: 'N' },
  { state: 'PA', name: 'Belém' , region: 'N' },
  { state: 'TO', name: 'Porto Nacional' , region: 'N' },
  { state: 'MG', name: 'Lavras' , region: 'SE' },
  { state: 'BA', name: 'Feira de Santana' , region: 'NE' },
  { state: 'PR', name: 'Cascavel' , region: 'S' },
  { state: 'SP', name: 'Presidente Prudente', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' }
];

// 2. Transforme (Mapeie) o array de objeto cities em um array de objetos no seguinte formato:
// {
//   state: 'Amazonas',
//   city: 'Manaus',
//   region: 'Norte'
// }

const arrayCities = cities.map((city) => {

  const stateOfCurrentCity = states.find((state) => state.short === city.state);
  const regionOfCurrentCity = regions.find((region) => region.short === city.region);

  return {
    state: stateOfCurrentCity.name,
    city: city.name,
    region: regionOfCurrentCity.name,
  };
});

console.log(arrayCities);


// Criar o array que vai conter todos os objetos com as informações das cidades
const arrayObjectsWithFor = [];
// Percorrer o array de cidades para encontrar as informações necessárias de cada uma delas
for (let cityIndex = 0; cityIndex < cities.length; cityIndex += 1) {
  // Armazenar a cidade atual para facilitar a escrita do código
  const currentCity = cities[cityIndex];
  // Criar a variável que vai armazenar o objeto que representa o estado da cidade atual
  let currentState = '';
  // Percorrer o array de estados
  for (let stateIndex = 0; stateIndex < states.length; stateIndex += 1) {
    // Comparar a sigla do estado da cidade atual com cada uma das siglas dos estados
    if (currentCity.state === states[stateIndex].short) {
      // Quando encontrar, armazenar esse objeto na variável do estado atual
      currentState = states[stateIndex];
      break;
    }
  }
  // Criar a variável que vai armazenar o objeto que representa a região da cidade atual
  let currentRegion = '';
  // Percorrer o array de regiões
  for (let regionIndex = 0; regionIndex < regions.length; regionIndex += 1) {
    // Comparar a sigla da região da cidade atual com cada uma das siglas das regiões
    if (currentCity.region === regions[regionIndex].short) {
      // Quando encontrar, armazenar esse objeto na variável da região atual
      currentRegion = regions[regionIndex];
      break;
    }
  }
  // Criar um objeto com as informações necessárias
  const currentCityObject = {
    state: currentState.name,
    city: currentCity.name,
    region: currentRegion.name,
  }
  // Adicionar esse objeto criado ao array que vai conter todos os objetos
  arrayObjectsWithFor.push(currentCityObject);
}
console.log(arrayObjectsWithFor);