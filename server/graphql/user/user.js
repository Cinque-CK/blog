const { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLINT } = require('graphql');
const { userType, userInputType } = require('./userTypes');
const { userModel } = require('../../model');

const userQueries = {
    users: {
        type: new GraphQLList(userType),
        args: {},
        resolve: async (root, params, options) => {
            const users = await userModel.findAll({ where: params });
            return users;
        }
    },

    user: {
        type: userType,
        args: {
            id: {
                name: 'id',
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve: async (root, params, options) => {
            const user = await userModel.find({ where: params });
            return user;
        }
    }
};

const userMutations = {
    createUser: {
        type: userType,
        args: {
            input: {
                type: new GraphQLNonNull(userInputType)
            }
        },
        resolve: async (root, {input}, options) => {
            const result = await userModel.create(input, options);
            return result;
        }
    }
}

module.exports = {
    userQueries,
    userMutations
}
