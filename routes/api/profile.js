const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

//@route GET api/profile/me
//@desc Get current users profile
//@access Private
router.get('/me', auth, async(req, res) => {
    try{
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name', 'avatar', 'email'])

        if(!profile){
            return res.status(400).json({message: 'no profile'})            
        }

        res.json(profile)

    }catch(err){    
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//@route Post api/profile
//@desc Create or update user profile
//@access Private
router.post('/' , [auth, [
    check('address', 'Address is required').not().isEmpty(),
    check('phone', 'Phone number is required').not().isEmpty(),
    check('emergency', 'Emergency phone number is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        phone,
        emergency,
        address,
        belt,
        bio,
        facebook,
        twitter,
        instagram,
        user
    } = req.body

    const profileFields = {}
    profileFields.user = user && user || req.user.id
    if(phone) profileFields.phone = phone
    if(emergency) profileFields.emergency = emergency
    if(address) profileFields.address = address
    if(belt) profileFields.belt = belt
    if(bio) profileFields.bio = bio

    profileFields.social = {}
    if(twitter) profileFields.social.twitter = twitter
    if(facebook) profileFields.social.facebook = facebook
    if(instagram) profileFields.social.instagram = instagram

    try{
        let profile  = await Profile.findOne({
            user: req.user.id
        })
        if(profile){
            profile = await Profile.findOneAndUpdate({
                user: user
            }, { 
                $set:  profileFields
            }, { 
                new: true 
            })
            return res.json(profile)
        }
        profile = new Profile(profileFields)
        await profile.save()
        res.json(profile)

    }catch(err){
        res.status(500).send('Server Error')
    }

})

//@route    Get api/profile
//@desc     GEt all profiles
//@access   Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['avatar', 'name', 'type'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)  
        res.status(500).send('Server Error')
    }
})


//@route    Get api/profile/user/:user_id
//@desc     Get profiles by id
//@access   Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['avatar', 'name'])

        if(!profile){
            return res.status(400).json({ message: 'there is no profile' })
        }

        res.json(profile)
    } catch (err) {
        console.error(err.message)  
        if(err.kind === 'ObjectId'){
            return res.status(400).json({ message: 'there is no profile' })
        }
        res.status(500).send('Server Error')
    }
})

//@route    DELETE api/profile
//@desc     DELETE profile, user and post
//@access   Private
router.delete('/', auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user: req.user.id })
        await User.findOneAndRemove({ _id: req.user.id })

        res.json({ message: "User removed" })

    } catch (err) {
        console.error(err.message)  
        res.status(500).send('Server Error')
    }
})

//@route    PUT api/profile/experience
//@desc     Add profile experience
//@access   Private
router.put('/experience', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { 
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    try {
        const profile = await Profile.findOne({
            user: req.user.id
        })
        profile.experience.unshift(newExp)
        await profile.save()

        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//@route    DELETE api/profile/experience/:exp_id
//@desc     DELETE profile experience
//@access   Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }) 
        const removeIndex = profile.experience.map(item => item.id)
            .indexOf(req.params.exp_id)
        profile.experience.splice(removeIndex, 1)
        await profile.save()
        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


//@route    PUT api/profile/education
//@desc     Add profile education
//@access   Private
router.put('/education', [auth, [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldofstudy', 'Field of study is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { 
        school,
        degree,
        fieldofstudy,
        from,
        to,
        description
    } = req.body

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        description
    }

    try {
        const profile = await Profile.findOne({
            user: req.user.id
        })
        profile.education.unshift(newEdu)
        await profile.save()

        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//@route    DELETE api/profile/education/:edu_id
//@desc     DELETE profile education
//@access   Private
router.delete('/education/:edu_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }) 
        const removeIndex = profile.education.map(item => item.id)
            .indexOf(req.params.edu_id)
        profile.education.splice(removeIndex, 1)
        await profile.save()
        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router