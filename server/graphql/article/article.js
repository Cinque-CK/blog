const { GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const { articleType, articleInputType } = require('./articleTypes');
const { articleModel } = require('../../model');

const articleQueries = {
    articles: {
        type: new GraphQLList(articleType),
        args: {},
        resolve: async (root, params, options) => {
            const articles = await articleModel.findAll({ where: params }).catch(e => e.throw(500));
            return articles;
        }
    },

    article: {
        type: articleType,
        args: {
            id: {
                name: 'id',
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve: async (root, params, options) => {
            const article = await articleModel.find({ where: params }).catch(e => e.throw(500));
            return article;
        }
    }
};

const articleMutations = {
    createArticle: {
        type: articleType,
        args: {
            input: {
                type: new GraphQLNonNull(articleInputType)
            }
        },
        resolve: async (root, {input}, options) => {
            const result = await articleModel.create(input, options).catch(e => e.throw(500));
            return result;
        }
    }
};

module.exports = {
    articleQueries,
    articleMutations
};
