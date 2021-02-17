const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Transaction = require('../../models/Transaction')

//@route GET api/transactions
router.get('/:userId', auth, async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            user: req.params.userId
        })
        .populate({
            path: 'transactions',
            populate: {
                path: 'tid'
            }
        })

        res.json(transaction)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    } 
})

module.exports = router