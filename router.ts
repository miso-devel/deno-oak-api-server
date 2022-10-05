import { Router, Status } from './deps.ts';

export const router = new Router();
router.get('/', (ctx) => {
  ctx.response.status = Status.OK;
  ctx.response.body = 'todo application with deno';
});

router.get('/todo', (ctx) => {
  ctx.response.status = Status.OK;
  ctx.response.body = 'get /todo dayo';
});
