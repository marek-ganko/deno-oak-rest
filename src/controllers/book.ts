import { Context, Status, helpers } from "https://deno.land/x/oak/mod.ts";
import {v4 as uuid} from "https://deno.land/std/uuid/mod.ts";
import books from "../models/book.model.ts";
import { Book } from "../types/book.ts";
import { notFound } from "../middleware/routing.ts";

export const getBooks = (context: Context) => {
  context.response.body = Array.from(books.values());
};

export const addBook = async (context: Context) => {
  console.log("post book");
  if (!context.request.hasBody) {
    context.throw(Status.BadRequest, "Bad Request");
  }
  const body = context.request.body();

  const book: Partial<Book> | undefined = await body.value;

  if (book) {
    book.id = uuid.generate();
    books.set(book.id, book as Book);
    context.response.status = Status.OK;
    context.response.body = book;
    context.response.type = "json";
    return;
  }

  context.throw(Status.BadRequest, "Bad Request");
};

export const getOneBook = async (context: Context) => {
  const params = helpers.getQuery(context, { mergeParams: true });

  if (!books.has(params.id!)) {
    return notFound(context);
  }

  context.response.body = books.get(params.id!);
};
