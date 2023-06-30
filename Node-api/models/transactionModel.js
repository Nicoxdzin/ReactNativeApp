const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

    amount: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Transaction', transactionSchema);