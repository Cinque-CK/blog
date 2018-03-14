const Sequelize = require('sequelize');
const { dbConf: { host, port, username, password, database, dialect } } = require('../config');

const sequelizeUtil = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelizeUtil
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelizeUtil;
