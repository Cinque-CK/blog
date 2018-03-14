var Sequelize = require('sequelize');
const {defineModel} = require('../util/modelUtil');

const articleModel = defineModel(
    'user',
    {
        title: { type: Sequelize.STRING },
        cover: { type: Sequelize.STRING},
        keywords: { type: Sequelize.STRING},
        content: { type: Sequelize.STRING },
        authorId: {type: Sequelize.INTEGER, field: 'author_id'},
        type: { type: Sequelize.INTEGER },
        views: { type: Sequelize.INTEGER}
    }
);
module.exports = userModel;