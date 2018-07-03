import * as Koa from 'koa';
import Router from './router';
const middleware = require('./middleware');

const app = new Koa();

middleware(app);

Router(app);

app.listen(3001, () => {
    console.log('server is running at http://localhost:3000');
});
