const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: String,
    price: Number,
    code: String,
    size: String,
    style: String,
    material: String,
    frontImage: String,
    backImage: String,
    sideImage: String,
    stockStatus: String,
    description: String,
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

const product = mongoose.model('product', productSchema);

module.exports = product;
