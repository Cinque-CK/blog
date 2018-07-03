const Sequelize = require('sequelize');
const { defineModel } = require('../util/modelUtil');

const userModel = defineModel('user', {
    name: { type: Sequelize.STRING, field: 'name', allowNull: false },
    password: { type: Sequelize.STRING, field: 'password', allowNull: false },
    email: { type: Sequelize.STRING, field: 'email', allowNull: false },
    avatar: { type: Sequelize.BOLB, field: 'avatar' },
    role: { type: Sequelize.INTEGER, field: 'role', allowNull: false },
    lastLoginAt: { type: Sequelize.BIGINT, field: 'last_login_at' }
});
export default userModel;
