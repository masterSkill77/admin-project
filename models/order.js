const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderType: String,
    designCode: String,
    construction: String,
    firstName: String,
    lastName: String,
    quantity: Number,
    customerName: String,
    material: String,
    colorChanges: String,
    email: String,
    mobile: String,
    city: String,
    zipCode: String,
    state: String,
    country: String,
    isActive: { type: Boolean, default: true },
},{timestamps:true});


const order = mongoose.model('order', orderSchema);

module.exports = order;
