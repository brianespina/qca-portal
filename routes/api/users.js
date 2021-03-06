const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')


const { check, validationResult } = require('express-validator')
const User = require('../../models/User')
const auth = require('../../middleware/auth')

//@route POST api/users
router.post(
    '/', 
    [
        check('name', 'Name is Required')
            .not()
            .isEmpty(),
        check('email', 'Include a valid email')
            .isEmail(),
        check('password', 'PasswordLength')
            .isLength({ min: 6 })
    ], 
    async (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, type, password } = req.body

        
        try{
            //if user exists 
            let user = await User.findOne({ email })
            if(user){
                return res.status(400).json({
                    errors: [
                        {msg: 'User already exists'}
                    ]
                })
            }

            //get gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            user = new User({
                name,
                email,
                type,
                avatar, 
                password
            })

            //encrypt password
            const salt  = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt) 
            await user.save()
            
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload, 
                config.get('jwtSecret'),
                { expiresIn: 360000 }, 
                (err, token) => {
                    if(err) throw err
                    res.json({ token })
                }
            )

        }catch(err){
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    }
)


//@route GET api/users/
//@desc Get all users
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find().select('-password')
        
        const usersNormalized = users.reduce((obj, user) => {

            const newobj = {
                ...obj,
                [user._id]: {...user._doc}
            }

            obj = newobj
            return obj
        }, {})

        res.json(usersNormalized)

    } catch (err) {
        console.error(err.message)  
        res.status(500).send('Server Error')
    }
})

module.exports = router