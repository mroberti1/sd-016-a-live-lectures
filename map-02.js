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

// 1. Transformar (mapear) o array de objetos cities em um array de strings com o seguinte formato:
// b) 'A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}'
console.log('Formato: A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}');

const citiesAndSatesName = cities.map((city) => {

  // Precisamos ENCONTRAR quel é o estado a partir da sigla do estado da cidade atual
  const stateOfCurrentCity = states.find((state) => state.short === city.state);

  return `A cidade de ${city.name} fica no estado de ${stateOfCurrentCity.name}`;
});

console.log(citiesAndSatesName);
