const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const TrainingHistory = require('../../models/TrainingHistory')

//@route Post api/traininghistory
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
        res.json(traininghistory)

    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }

})


module.exports = router