import * as Koa from 'koa';
import * as Next from 'next';
import AppRouter from './router';
import middleware from './middleware';
const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const next = Next({ dev })


next.prepare()
.then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   })
//   .listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
const koa = new Koa();

middleware(koa);

AppRouter(koa, next);

koa.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

})






