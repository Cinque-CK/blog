const { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLInputObjectType, GraphQLObjectType } = require('graphql');
const userType = new GraphQLObjectType({
    name: 'userType',
    description: 'User type definition',
    fields: {
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        password: {
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
        },
        lastLoginAt: {
            type: GraphQLInt
        }
    }
});
const userInputType = new GraphQLInputObjectType({
    name: 'userInputType',
    description: 'User payload definition',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        avatar: {
            type: GraphQLString
        },
        role: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        lastLoginAt: {
            type: GraphQLInt
        }
    }
});
module.exports = {
    userType,
    userInputType
};
//# sourceMappingURL=userTypes.js.map