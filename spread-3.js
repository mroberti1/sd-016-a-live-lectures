// Transforme o conteúdo de um array em argumentos da função! Com e sem spread operators.
const point = [1.0, 2.2, -6.6, 10, 20];

const otherPoint = [0.1, 3.5, -99.6];
 
printPointCoordinates = (x, y, z) => `Point coordinates are: x = ${x}, y = ${y} and z = ${z}`;

// Resultado esperado ao chamar a função passando point:
// 'Point coordinates are: x = 1, y = 2.2 and z = -6.6'
// console.log(printPointCoordinates(point[0], point[1], point[2]));
console.log(printPointCoordinates(...point));

// Resultado esperado ao chamar a função passando otherPoint:
// 'Point coordinates are: x = 0.1, y = 3.5 and z = -99.6'
// console.log(printPointCoordinates(otherPoint[0], otherPoint[1], otherPoint[2]));
console.log(printPointCoordinates(...otherPoint));