const mongoose = require("mongoose");



const userSchema=mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },

      password: {
        type: String,
        required: true,
      }

})

const tokenSchema=mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
        unique:true
    },

token:{type:String,
required:true},

createdAt:{type:Date,
    default:Date.now(),expires:36000

}
})

module.exports={
    UserSchema:mongoose.model('user',userSchema),
    TokenSchema:mongoose.model('token',tokenSchema),
 }