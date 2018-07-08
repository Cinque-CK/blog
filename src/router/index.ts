const router = require('koa-router')();
const userRoute = require('./userRoute');
const Router = (app: any) => {
    userRoute(router);
    app.use(router.routes()).use(router.allowedMethods());
};

export default Router;
