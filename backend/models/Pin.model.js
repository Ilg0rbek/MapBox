const {Schema, model} = require('mongoose')

const PinSchema = new Schema({
    username:{
        type:String,
        require:true
    },  
    emailadress:{
        type:String,
        require:true,
        min:3
    },
    desc:{
        type:String,
        require,
        min:3
    },
    raiting:{
        type:Number,
        require:true,
        min:0,
        max:5
    },
    lat:{
        type:Number,
        require:true
    },
    long:{
        type:Number,
        require:true
    }
}, {timestamps:true})

module.exports = model('Pin', PinSchema)