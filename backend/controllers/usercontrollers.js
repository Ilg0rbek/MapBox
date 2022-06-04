const bcrypt = require('bcrypt');
const User = require('../models/User.model')

//Register user
const registerUser =async (req,res)=>{
    try {
             //generate new password
             const salt = await bcrypt.genSalt(10)
             const hashedPassword  = await bcrypt.hash(req.body.password, salt)

             //create new password
             const newUser =new User({
                 username:req.body.username,
                 email: req.body.email,
                 password: hashedPassword
             })

             //save user and send user
             const user = await newUser.save()
             res.status(200).json(user._id)
       
    } catch (error) {
        res.status(500).json(error)
    }
}

//Login user
const loginUser =async (req,res)=>{
      try {
             //find user
              const user = User.findOne({username:req.body.username})
              !user && res.status(400).json('Invalid passwor or Username!')

             //validate password
             const validpassword  = await bcrypt.compare(req.body.password, user.password)
             !validpassword && res.status(400).json('Invalid passwor or Username!')
 
             //send response
              res.status(200).json({_id:user._id, username:user.username})

      } catch (error) {
          res.status(500).json(error)
      }
}

module.exports ={
    registerUser,
    loginUser
}