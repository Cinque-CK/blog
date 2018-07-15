import * as Koa from 'koa';
import * as Router from 'koa-router';
import userRoute from './userRoute';
const router = new Router();
const AppRouter = (koa: Koa, next) => {
    userRoute(router, next);
    koa.use(router.routes()).use(router.allowedMethods());
};

export default AppRouter;
