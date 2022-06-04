const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },  
    emailadress:{
        type:String,
        require:false,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6
    }
}, {timestamps:true})

module.exports = model('User', UserSchema)