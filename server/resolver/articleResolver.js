const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, isOutputType, GraphQLInt } = require('graphql');
const { articleModel } = require('../model');

const articleType = new GraphQLObjectType({
    name: 'article',
    fields: {
        id: {
            type: GraphQLID
        },
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
            type: GraphQLObjectType
        },
        type: {
            type: GraphQLInt
        },
        views: {
            type: GraphQLInt
        },
        createdAt: {
            type: GraphQLInt
        }

    }
});

const allArticles = {
    type: new GraphQLList(articleType),
    args: {},
    resolve(root, params, options) {
        return articleModel.findAll();
    }
};

const article = {
    type: articleType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        return articleModel.find({ where: params });
    }
}

module.exports = {allArticles, article};