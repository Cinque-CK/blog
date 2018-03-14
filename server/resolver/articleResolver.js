const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, isOutputType, GraphQLInt } = require('graphql');
const { userModel } = require('../model');

const articleType = new GraphQLObjectType({
    name: 'article',
    fields: {
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        avatar: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        role: {
            type: GraphQLInt
        }
    }
});

const allUsers = {
    type: new GraphQLList(userType),
    args: {},
    resolve(root, params, options) {
        return userModel.findAll({ where: params });
    }
};

const user = {
    type: userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        return userModel.find({ where: params });
    }
}

module.exports = {allUsers, user};