const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    transactions: [
        {
            tid: {
                type: Schema.Types.ObjectId,
                required: true
            },
            validity: {
                type: Number,
                required: true
            },
            promo: {
                type: Boolean,
                required: true
            },
            pcode: {
                type: String
            },
            price: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = Transaction = mongoose.model('transaction', TransactionSchema)