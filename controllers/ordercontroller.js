const order = require('../models/order');
const flash = require('connect-flash');



// exports.order = (req, res) => {
//     res.render('admin/order.ejs')


// }


exports.addorder = async (req, res) => {

    try {

        const formData = req.body;
        const orderData = new order(formData)
        await orderData.save()
        res.json({ message: "data save sucessfully" })


    } catch (err) {
        res.status(500).send('order unsuccsefully', err)

    }

}

exports.orderpage = async (req, res) => {

    const record = await order.find()
    res.render('admin/order.ejs', { record })

}
// Active button proccess
exports.orderId = async (req, res) => {
    try {
        const orderId = req.params.id;
        const Order = await order.findById(orderId);
        Order.isActive = !Order.isActive;
        await Order.save();
        res.redirect('/admin/order');
    } catch (error) {
        console.error('Error toggling order status:', error);
        req.flash('error_msg', 'An error occurred while toggling order status.');
        res.redirect('/admin/order');
    }
}

exports.orderDelete = async (req, res) => {
    const id = req.params.id
    await order.findByIdAndDelete(id)
    res.redirect('/admin/order')


}




