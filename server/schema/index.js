const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { userResolver: { users } } = require('../resolver');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'userQuery',
        fields: {
            users
        }
    })
});
