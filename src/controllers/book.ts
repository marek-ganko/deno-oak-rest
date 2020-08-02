        import { Context, Status, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import books from '../models/book.model.ts';
import {Book} from '../types/book.ts';
import {notFound} from '../middleware/routing.ts';

export const getBooks = (context: Context) => {
  context.response.body = Array.from(books.values());
}

export const addBook = async (context: RouterContext) => {
  console.log('post book');
  if (!context.request.hasBody) {
    context.throw(Status.BadRequest, 'Bad Request');
  }
  const body = context.request.body();
  let book: Partial<Book> | undefined;
  if (body.type === 'json') {
    book = await body.value;
  } else if (body.type === 'form') {
    book = {};
    for (const [key, value] of await body.value) {
      book[key as keyof Book] = value;
    }
  } else if (body.type === 'form-data') {
    const formData = await body.value.read();
    book = formData.fields;
  }
  if (book) {
    context.assert(book.id && typeof book.id === 'string', Status.BadRequest);
    books.set(book.id, book as Book);
    context.response.status = Status.OK;
    context.response.body = book;
    context.response.type = 'json';
    return;
  }
  context.throw(Status.BadRequest, 'Bad Request');
}

export const getOneBook = async (context: RouterContext) => {
  if (context.params && books.has(context.params.id!)) {
    context.response.body = books.get(context.params.id!);
  } else {
    return notFound(context);
  }
}
