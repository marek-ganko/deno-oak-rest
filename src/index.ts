import { bold, yellow } from 'https://deno.land/std@0.62.0/fmt/colors.ts';
import app from './app.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";

console.log(config());

app.addEventListener('listen', ({ hostname, port }) => {
  console.log(bold('Start listening on ') + yellow(`${hostname}:${port}`));
});

console.log(Deno.env.get("PORT"));

await app.listen({ hostname: '127.0.0.1', port: parseInt(Deno.env.get("PORT")!) || 8000 });
console.log(bold('Finished.'));
