import { Router } from 'https://deno.land/x/oak/mod.ts';
import {addBook, getBooks, getOneBook} from './book.ts';

export const router = new Router();
router
  .get('/', (context) => {
    context.response.body = 'Hello world!';
  })
  .get('/book', getBooks)
  .post('/book', addBook)
  .get<{ id: string }>('/book/:id', getOneBook);
