const mongoose = require('mongoose');
const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const order = sequelize.define(
	'order',
	{
		orderType: { type: DataTypes.STRING },
		designCode: { type: DataTypes.STRING },
		construction: { type: DataTypes.STRING },
		firstName: { type: DataTypes.STRING },
		lastName: { type: DataTypes.STRING },
		quantity: { type: DataTypes.INTEGER },
		customerName: { type: DataTypes.STRING },
		material: { type: DataTypes.STRING },
		colorChanges: { type: DataTypes.STRING },
		email: { type: DataTypes.STRING },
		mobile: { type: DataTypes.STRING },
		city: { type: DataTypes.STRING },
		zipCode: { type: DataTypes.STRING },
		state: { type: DataTypes.STRING },
		country: { type: DataTypes.STRING },
		isActive: { type: DataTypes.BOOLEAN, default: true },
	},
	{ timestamps: true }
);
order.sync();
module.exports = order;
