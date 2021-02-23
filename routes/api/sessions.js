const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const TrainingHistory = require('../../models/TrainingHistory')
const Profile = require('../../models/Profile')
const Transaction = require('../../models/Transaction')

//@route Post api/sessions
//@desc create or update training history
//@access Private
router.post('/', [auth, [
    check('coach', 'Coach is required').not().isEmpty(),
    check('attendees', 'Attendees is required').not().isEmpty()
]], async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {
        coach,
        attendees
    } = req.body

    try{
        const newTrainingHistory = new TrainingHistory({
            coach: coach,
            attendees: attendees    
        })

        const traininghistory = await newTrainingHistory.save()

        attendees.forEach(async (attendee, index) => {
            try {
                const transaction = await Transaction.findOne({
                    user: attendee.user
                })

                if(!transaction){
                    const newTransaction = new Transaction({
                        user: attendee.user,
                        transactions: [
                            {
                                tid: traininghistory._id,
                                validity: attendee.validity,
                                promo: attendee.promo,
                                price: attendee.price,
                                status: attendee.status
                            }
                        ]
                    })
                    await newTransaction.save()
                }else{
                    transaction.transactions.unshift(
                        {
                            tid: traininghistory._id,
                            validity: attendee.validity,
                            promo: attendee.promo,
                            price: attendee.price,
                            status: attendee.status
                        }
                    )
                    await transaction.save()
                }

            } catch (err) {
                console.error(err.message)
                res.status(500).send('Server Error')
            }
        })

        res.json(traininghistory)

    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }

})

//@route    Get api/sessions
//@desc     GEt all Training History
//@access   Public
router.get('/', auth, async (req, res) => {
    try {
        const trainingDays = await TrainingHistory.find()
        .populate('coach', ['avatar', 'name'])
        .populate('attendees.user', ['avatar', 'name'])
        res.json(trainingDays)
    } catch (err) {
        console.error(err.message)  
        res.status(500).send('Server Error')
    }
})

//@route    Get api/sessions/:sid/:uid
//@desc     GEt User transaction on a session
//@access   Public
router.get('/:sid/:uid', auth, async (req, res) => {
    try {
        const transactionDays = await Transaction.findOne({
            user: req.params.uid
        })

        const sessionDay = transactionDays.transactions.filter( day => day.tid.toString() === req.params.sid)

        res.json(sessionDay)
        
    } catch (err) {
        console.error(err.message)  
        res.status(500).send('Server Error')
    }
})


module.exports = router