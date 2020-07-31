const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        default: Date.now
    },
    end: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    },
    paidto: {
        type: String
    }
})

module.exports = Subscription = mongoose.model('subscription', SubscriptionSchema)