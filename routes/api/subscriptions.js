const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Subscription = require('../../models/Subscription')
const User = require('../../models/User')
const { route } = require('./profile')
 
//@route GET api/subscriptions/
//@desc Get all subscriptions
//@access Private
router.get('/', auth, async (req, res) => {
    res.status(200).send('working')
})

//@route POST api/subscriptions/
//@desc add subscription
//@access Private
router.post('/', [auth, [
    check('type', 'Type is required').not().isEmpty(),
    check('status', 'Status is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        type,
        start,
        end,
        status,
        paid
    } = req.body

    const subscriptionsFields = {}
    if(type) subscriptionsFields.type = type
    if(start) subscriptionsFields.start = start
    if(end) subscriptionsFields.end = end
    if(status) subscriptionsFields.status = status
    if(paid) subscriptionsFields.paid = paid

    try {
        const currentUser = await User.findById(req.body.user.id).select('-password')
        const paidTo = await User.findById(req.body.paidto).select('-password')

        const newSubscription = new Subscription({
            ...subscriptionsFields,
            user: {
                name: currentUser.name,
                id: req.body.user.id
            },
            paidto: {
                name: paidTo.name,
                id: req.body.paidto
            }
        })

        const subscription = await newSubscription.save()

        res.json(subscription)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router