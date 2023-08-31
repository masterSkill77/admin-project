const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const slider = sequelize.define(
	'slider',
	{
		img1: { type: DataTypes.STRING },
		img2: { type: DataTypes.STRING },
		img3: { type: DataTypes.STRING },
		img4: { type: DataTypes.STRING },
		img5: { type: DataTypes.STRING },
	},
	{ timestamps: true }
);
slider.sync();

module.exports = slider;
