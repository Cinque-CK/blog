import * as Koa from 'koa';
import * as Next from 'next';
import AppRouter from './router';
import middleware from './middleware';
const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const next = Next({ dev })


next.prepare()
.then(() => {
const koa = new Koa();

middleware(koa);

AppRouter(koa, next);

koa.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

})






