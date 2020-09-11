import { bold, yellow } from 'https://deno.land/std@0.62.0/fmt/colors.ts';
import app from './app.ts';

app.addEventListener('listen', ({ hostname, port }) => {
  console.log(bold('Start listening on ') + yellow(`${hostname}:${port}`));
});

await app.listen({ hostname: '127.0.0.1', port: 5000 });
console.log(bold('Finished.'));
