"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const router_1 = require("./router");
const middleware = require('./middleware');
const app = new Koa();
middleware(app);
router_1.default(app);
app.listen(3001, () => {
    console.log('server is running at http://localhost:3000');
});
//# sourceMappingURL=server.js.map