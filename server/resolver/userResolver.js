const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, isOutputType, GraphQLInt } = require('graphql');
const { userModel } = require('../model');

const userType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        role: {
            type: GraphQLInt
        },
        lastLoginAt: {
            type: GraphQLInt
        }
    }
});

const users = {
    type: new GraphQLList(userType),
    args: {},
    resolve(root, params, options) {
        return userModel.findAll({ where: params });
    }
};

module.exports = {
    users
};
