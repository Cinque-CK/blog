"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('koa-router')();
const userRoute = require('./userRoute');
const Router = (app) => {
    userRoute(router);
    app.use(router.routes()).use(router.allowedMethods());
};
exports.default = Router;
//# sourceMappingURL=index.js.map