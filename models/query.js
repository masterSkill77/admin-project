const { DataTypes } = require('sequelize');
const sequelize = require('./../database/sequelize');

const query = sequelize.define('query', {
	name: {
		type: DataTypes.STRING,
	},
	mobile: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
	},
	message: {
		type: DataTypes.STRING,
	},
});
query.sync();
module.exports = query;
