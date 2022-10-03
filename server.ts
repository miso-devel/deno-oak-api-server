import { Application, bold, yellow } from './deps.ts';
import { router } from './router.ts';
import logger from 'https://deno.land/x/oak_logger@1.0.0/mod.ts';
const app = new Application();
// logger
app.use(logger.logger);
app.use(logger.responseTime);

// middleware
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ hostname, port }) => {
  console.log(
    bold(`stast listening on`) +
      yellow(` ${hostname ? hostname : 'localhost'} :${port}`)
  );
});
const port = parseInt(Deno.env.get('PORT') ?? '8000');
app.listen({ port });
