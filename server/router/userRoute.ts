import Router from 'koa-router';
import UserController from '../controller/userController';
import ApiConst from '../../consts/apiConst';
export default function (router: Router, next) {
    const handle = next.getRequestHandler()
    const {USER_GET_USERS, USER_LOGIN, USER_REGISTER} = ApiConst;
    router.get('/login',  async ctx => {
        await next.render(ctx.req, ctx.res, '/login', ctx.query)
          ctx.respond = false
    })

    router.get('/blog', async ctx => {
        await next.render(ctx.req, ctx.res, '/blog', ctx.query)
          ctx.respond = false
    })

    router.get('/travels', async ctx => {
        await next.render(ctx.req, ctx.res, '/travels', ctx.query)
          ctx.respond = false
    })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false;
    })

    router.get(USER_GET_USERS, UserController.getUsers);
    router.post(USER_LOGIN, UserController.login);
    router.post(USER_REGISTER, UserController.register);
}
