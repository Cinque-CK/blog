const router = require('koa-router')();
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');

const userRoute = require('./userRoute');
const schema = require('../graphql/schema')
module.exports = app => {
    userRoute(router);

    router.post('/graphql', async (ctx, next) => {
        await graphqlKoa({ schema: schema })(ctx, next); // 使用schema
    });
    router.get('/graphql', async (ctx, next) => {
        await graphqlKoa({ schema: schema })(ctx, next); // 使用schema
    });
    router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

    app.use(router.routes()).use(router.allowedMethods());
};
