const {Router} = require('express')
const { createPin,getAllPins } = require('../controllers/pincontrollers')


const router = Router()


//create a PIN
router.post('/', createPin)


// get all pins
router.get('/',getAllPins)

module.exports = router