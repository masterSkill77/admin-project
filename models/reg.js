const { DataTypes } = require('sequelize');
const sequelize = require('./../database/sequelize');

const reg = sequelize.define('reg', {
	username: { type: DataTypes.STRING },
	password: { type: DataTypes.STRING },
});
reg.sync();
module.exports = reg;
