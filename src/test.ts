import { superoak } from "https://deno.land/x/superoak/mod.ts";
import app from "./app.ts";
import books from "./models/book.model.ts";
import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);
const mockedData = require('./models/book.mock.json');

Deno.test('it will return "Hello world!" message on / endpoint',
    async () => {
        const request = await superoak(app);
        await request.get("/").expect(200).expect("Hello world!");
    }
);

Deno.test('it will return 404 error code on non existing page',
    async () => {
        const request = await superoak(app);
        await request.get("/non-existing-page").expect(404);
    }
);

Deno.test('it will return all books on /book page',
    async () => {
        const request = await superoak(app);
        await request.get("/book").expect(200).expect(mockedData);
    }
);

Deno.test('it will return one book on /book/:id page',
    async () => {
        const request = await superoak(app);
        await request.get("/book/1234").expect(200).expect(<object>books.get('1234'));
    }
);
