import Router from 'koa-router';
import UserController from '../controller/userController';
export default function (router: Router, next) {
    router.get('/blog', async ctx => {
        await next.render(ctx.req, ctx.res, '/blog', ctx.query)
          ctx.respond = false
    })

    router.get('/travels', async ctx => {
        await next.render(ctx.req, ctx.res, '/travels', ctx.query)
          ctx.respond = false
    })
    router.get('/', async ctx => {
        await next.render(ctx.req, ctx.res, '/index', ctx.query)
          ctx.respond = false
    })

    // router.get('/user', UserController.getUsers);
    router.post('/user/register', UserController.register);
    // router.post('/user/login', UserController.login);
}
