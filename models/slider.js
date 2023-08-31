const mongoose = require('mongoose');


const sliderSchema = new mongoose.Schema({

    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String


}, { timestamps: true })


const slider = mongoose.model('slider', sliderSchema)
module.exports = slider;