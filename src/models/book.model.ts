import { Book } from '../types/book.ts';

const books = new Map<string, Book>();

books.set('1234', {
  id: '1234',
  title: 'The Hound of the Baskervilles',
  author: 'Conan Doyle, Author',
});

export default books;
