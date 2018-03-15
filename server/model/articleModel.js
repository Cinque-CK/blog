var Sequelize = require('sequelize');
const { defineModel } = require('../util/modelUtil');

const articleModel = defineModel('article', {
    title: { type: Sequelize.STRING, allowNull: false },
    cover: { type: Sequelize.STRING },
    keywords: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER, field: 'author_id', allowNull: false },
    type: { type: Sequelize.INTEGER, allowNull: false },
    views: { type: Sequelize.INTEGER }
});
module.exports = articleModel;
