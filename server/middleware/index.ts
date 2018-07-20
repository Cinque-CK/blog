import Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import miSend from './mi-send';

export default function (app : Koa) {
    app.use(bodyParser({formLimit: '1mb'}));
    app.use(miSend());
}
