const db = require('./../config/db');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(db);

module.exports = sequelize;
