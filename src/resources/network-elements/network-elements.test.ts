import { superoak } from 'https://deno.land/x/superoak/mod.ts';
import app from '../../app.ts';
import { networkElements } from './network-elements.mock.ts';

Deno.test({
  name: 'it will return all network elements on /network-elements page',
  fn: async () => {
    const request = await superoak(app);
    await request
      .get('/network-elements')
      .expect(200)
      .expect(networkElements);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: 'it will return one network elements on /network-elements/:id page',
  fn: async () => {
    const request = await superoak(app);
    await request
      .get('/network-elements/1')
      .expect(200)
      .expect(networkElements[0]);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
