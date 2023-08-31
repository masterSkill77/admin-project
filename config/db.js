require('dotenv').config();

module.exports = {
	host: process.env.DB_HOST,
	dialect: 'mysql',
	database: process.env.DB_NAME,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	port: 3306,
};
