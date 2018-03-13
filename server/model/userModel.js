var Sequelize = require('sequelize');
const {defineModel} = require('../util/modelUtil');

const userModel = defineModel(
    'user',
    {
        name: { type: Sequelize.STRING, field: 'name' },
        email: { type: Sequelize.STRING, field: 'email' },
        avatar: { type: Sequelize.BLOB, field: 'avatar' },
        role: { type: Sequelize.INTEGER, field: 'role' },
        lastLoginAt: { type: Sequelize.BIGINT, field: 'last_login_at' }

    }
);
module.exports = userModel;
