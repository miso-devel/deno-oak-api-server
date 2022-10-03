import { green } from 'https://deno.land/std@0.152.0/fmt/colors.ts';
import { Context, cyan } from '../deps.ts';
// middleware
// routerが走る前にしたいことを記述
export const logger = async (ctx: Context, next: () => Promise<void>) => {
  await next();
  console.log(`${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)}`);
};
