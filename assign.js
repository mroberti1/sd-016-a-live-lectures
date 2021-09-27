const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King',
  publisher: {
    name: 'Martins Fontes',
    address: 'Rua XYZ, 123',
  }
};

const bookAuthor = {
  authorName: 'J. R. R. Tolkien',
};

// console.log(books);

Object.assign(books, bookAuthor);

// console.log(books);

// Armazenar as informações de books em um novo objeto
const newBook = Object.assign({}, books);

newBook.publisher.address = 'Rua ABC';

// console.log(newBook);
// newBook.book3 = 'Harry Potter';

console.log('New Book');
console.log(newBook);

console.log('Book');
console.log(books);