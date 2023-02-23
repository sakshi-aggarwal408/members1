const mongoose = require('mongoose')
const Schema= new mongoose.Schema({

    name:{
        type:String,
       
    },
    email:{
        type:String,
        unique: true
       
    },
    phone:{
        type:String,
      
    },
    password:{
        type:String,
        
    },
    confirm_password:{
        type:String,
       
    }


})

const Signup_Data= mongoose.model('Signup',Schema)
module.exports=Signup_Data