const { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLInputObjectType, GraphQLObjectType } = require('graphql');
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
            type: GraphQLString
        },
        authorId: {
            type: GraphQLID
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
    description: 'Article payload definition',
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        cover: {
            type: GraphQLString
        },
        keywords: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        authorId: {
            type:  new GraphQLNonNull(GraphQLID)
        },
        type: {
            type:  new GraphQLNonNull(GraphQLInt)
        },
        views: {
            type:  new GraphQLNonNull(GraphQLInt)
        }
        
    }
})

module.exports = {
    articleType,
    articleInputType
};