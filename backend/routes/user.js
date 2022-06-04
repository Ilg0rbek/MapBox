const {Router} = require('express')
const { registerUser, loginUser } = require('../controllers/usercontrollers')


const router = Router()

//user register
router.post('/register', registerUser)

//user login
router.post('/login', loginUser)

module.exports = router