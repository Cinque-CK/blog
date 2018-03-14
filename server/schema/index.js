const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const resolver = require('../resolver');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {
            ...resolver
        }
    })
});

module.exports = schema;
