const mongoose = require('mongoose');

const carpetSchema = new mongoose.Schema({
    carpetName: {
        type: String,
        required: true
    },
    designImage: {
        type: String
    },
    carpetSize: {
        length: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        }
    },
    yourName: {
        type: String,
        required: true
    },
    yourEmail: {
        type: String,
        required: true
    },
    yourMobileNumber: {
        type: String,
        required: true
    }
});

const rugs = mongoose.model('rugs', carpetSchema);

module.exports = rugs;
