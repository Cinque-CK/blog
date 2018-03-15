const { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLInputObjectType, GraphQLObjectType } = require('graphql');
const {userType} = require('../user/userTypes')
const articleType = new GraphQLObjectType({
    name: 'articleType',
    description: 'Article type definition',
    fields: {
        title: {
            type: GraphQLString
        },
        cover: {
            type: GraphQLString
        },
        keywords: {
            type: GraphQLString
        },
        content: {
            type: GraphQLInt
        },
        author: {
            type: userType
        },
        type: {
            type: GraphQLInt
        },
        views: {
            type: GraphQLInt
        }
    }
});

const articleInputType = new GraphQLInputObjectType({
    name: 'articleInputType',
    description: 'Article type definition',
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})

module.exports = {
    articleType,
    articleInputType
};