const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'test', 'Strong34S;#', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;