// Extraia as informações do objeto abaixo para montar uma frase!
const singer = {
  fullName: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albums: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
};

// const fullName = singer.fullName;
// const place = singer.birthplace;
// const city = singer.city;
// const albums = singer.albums;

const { fullName, birthplace: place, city, albums, obj } = singer;

const phrase = `O cantor ${fullName} nasceu no ${place} e mora em ${city}. Ele possui ${albums.length} álbuns.`;

// Resultado esperado ao imprimir phrase:
// 'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 álbuns.
console.log(phrase);