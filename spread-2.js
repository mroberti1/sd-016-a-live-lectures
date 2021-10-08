// Una os dois arrays de duas formas diferentes! Com loops e com spread operators!
const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// Resultado esperado:
// ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']

// LOOP
const allBooks = [];
for (let index = 0; index < horrorBooks.length; index += 1) {
  allBooks.push(horrorBooks[index]);
}
scifiBooks.forEach((book) => {
  allBooks.push(book);
});

console.log(allBooks);

const awesomeBooks = [...horrorBooks, ...scifiBooks];
// awesomeBooks.push(...horrorBooks, ...scifiBooks);

console.log(awesomeBooks);
