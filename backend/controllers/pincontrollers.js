const PinModel = require('../models/Pin.model')


//create a PIN 
const createPin =async (req,res)=>{
    const newPin = PinModel(req.body)
    try {
        const savedPin =await newPin.save()
        res.status(200).json(savedPin)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all Pins 
const getAllPins =async (req,res)=>{
    try {
         const pins= await PinModel.find()
         res.status(200).json(pins)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports ={
    createPin,
    getAllPins
}