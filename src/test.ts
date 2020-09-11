import { superoak } from 'https://deno.land/x/superoak/mod.ts';
import app from './app.ts';

Deno.test({
  name: 'it will return "Hello world!" message on / endpoint',
  fn: async () => {
    const request = await superoak(app);
    await request
      .get('/')
      .expect(200)
      .expect('Hello world!');
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: 'it will return 404 error code on non existing page',
  fn: async () => {
    const request = await superoak(app);
    await request.get('/non-existing-page').expect(404);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
