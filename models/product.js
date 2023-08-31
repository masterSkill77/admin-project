const { DataTypes } = require('sequelize');
const sequelize = require('./../database/sequelize');

const product = sequelize.define(
	'product',
	{
		name: { type: DataTypes.STRING },
		price: { type: DataTypes.INTEGER },
		code: { type: DataTypes.STRING },
		size: { type: DataTypes.STRING },
		style: { type: DataTypes.STRING },
		material: { type: DataTypes.STRING },
		frontImage: { type: DataTypes.STRING },
		backImage: { type: DataTypes.STRING },
		sideImage: { type: DataTypes.STRING },
		stockStatus: { type: DataTypes.STRING },
		description: { type: DataTypes.STRING },
		isActive: { type: DataTypes.BOOLEAN, default: true },
	},
	{ timestamps: true }
);

product.sync();

module.exports = product;
