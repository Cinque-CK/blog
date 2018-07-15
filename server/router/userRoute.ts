import Router from 'koa-router';
import userController from '../controller/userController';
export default function (router: Router, next) {
    router.get('/blog', async ctx => {
        await next.render(ctx.req, ctx.res, '/blog', ctx.query)
          ctx.respond = false
    })

    router.get('/travels', async ctx => {
        await next.render(ctx.req, ctx.res, '/travels', ctx.query)
          ctx.respond = false
    })

    router.get('/user', userController.getUsers);
    router.post('/user/register', userController.register);
    router.post('/user/login', userController.login);
}
