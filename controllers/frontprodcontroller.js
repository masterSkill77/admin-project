const product = require('../models/product');

exports.product = async (req, res) => {
	const record = await product.findAll();
	res.render('products.ejs', { record });
};
