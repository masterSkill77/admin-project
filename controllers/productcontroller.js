const product = require('../models/product')
const flash = require('connect-flash');


exports.product = async (req, res) => {
    const record = await product.find()
    res.render('admin/viewProduct.ejs', { record })


}


exports.productDelete = async (req, res) => {
    const id = req.params.id
    await product.findByIdAndDelete(id)
    res.redirect('/admin/viewProduct')
}

exports.productId = async (req, res) => {
    try {
        const productId = req.params.id;
        const Product = await product.findById(productId);
        Product.isActive = !Product.isActive;
        await Product.save();
        res.redirect('/admin/viewProduct');
    } catch (error) {
        console.error('Error toggling order status:', error);
        req.flash('error_msg', 'An error occurred while toggling order status.');
        res.redirect('/admin/viewProduct');
    }
}




exports.addProduct = async (req, res) => {


    res.render('admin/addProduct.ejs')

}



