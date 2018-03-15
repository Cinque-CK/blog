const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {userQueries, userMutations } = require('./user/user');
const {articleQueries, articleMutations} = require('./article/article')
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {
            ...userQueries,
            ...articleQueries
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: {
            ...userMutations,
            ...articleMutations
        }
    })
});

module.exports = schema;