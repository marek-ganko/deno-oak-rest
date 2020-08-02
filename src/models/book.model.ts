import { Book } from "../types/book.ts";
import { createRequire } from "https://deno.land/std/node/module.ts";

const books = new Map<string, Book>();
const require = createRequire(import.meta.url);
const mockedData = require('./book.mock.json');

mockedData.map((book: Book) => books.set(book.id, book));

const b = books.get('1234');

console.log(b);

export default books;
