import { Application, bold, yellow } from './deps.ts';
import { router } from './router.ts';
const app = new Application();
// Logger
// middlewareよりも前に書かないと動かない
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

// middleware
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ hostname, port }) => {
  console.log(
    bold(`stast listening on`) +
      yellow(` ${hostname ? 'localhost' : hostname} :${port}`)
  );
});
const port = parseInt(Deno.env.get('PORT') ?? '8000');
app.listen({ port });
