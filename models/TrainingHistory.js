const mongoose = require('mongoose')

const TrainingHistorySchema = new mongoose.Schema({
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    attendees: [
        {
            user: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'user'
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = TrainingHistory = mongoose.model('traininghistory', TrainingHistorySchema)