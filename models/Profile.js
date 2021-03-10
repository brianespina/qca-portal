const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    phone: {
      type: String
    },
    emergency: {
      type: String
    },
    address: {
      type: String
    },
    belt: {
      type: String
    },
    bio: {
      type: String
    },
    coachNotes: {
      type: String
    },
    competition: {
      event: {
        type: String
      },
      status: {
        type: Boolean
      }
    },
    subscription: {
      subtype: {
        type: String
      },
      start: {
        type: Date
      },
      end: {
        type: Date
      }
    },
    social: {
      youtube: {
        type: String
      },
      twitter: {
        type: String
      },
      facebook: {
        type: String
      },
      linkedin: {
        type: String
      },
      instagram: {
        type: String
      }
    },
    transactions: [
        {
            type: Object,
            ref: 'traininghistory'
        }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  })

  module.exports = Profile = mongoose.model('profile', ProfileSchema)