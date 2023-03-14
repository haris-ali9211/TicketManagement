const mongoose = require('mongoose');
const validator = require('validator')

const transferSchema = new mongoose.Schema({
    ebNumber: {
        type: String,
        unique: true,
        required: true,                 
    },
    name: {
        type: String,
        required: true, 
    },
    semester: {
        type: Number,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('invalid')
            }
        }
    },
    payment: {
        type: String,
        required: true, 
    },
    ifPaymentOnline: {
        type: String,
        required: true, 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Transfer', transferSchema);