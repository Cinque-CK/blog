const userResolver = require('./userResolver');
const articleResolver = require('./articleResolver')

const resolver = {...userResolver,...articleResolver}

module.exports = resolver;
