const { DataTypes } = require('sequelize');
const sequelize = require('./../database/sequelize');

const rugs = sequelize.define('carpet', {
	carpetName: {
		type: DataTypes.STRING,
		required: true,
	},
	designImage: {
		type: DataTypes.STRING,
	},
	carpetSizeLength: {
		type: DataTypes.INTEGER,
		required: true,
	},
	carpetSizeWidth: {
		type: DataTypes.INTEGER,
		required: true,
	},
	yourName: {
		type: DataTypes.STRING,
		required: true,
	},
	yourEmail: {
		type: DataTypes.STRING,
		required: true,
	},
	yourMobileNumber: {
		type: DataTypes.STRING,
		required: true,
	},
});

rugs.sync();

module.exports = rugs;
