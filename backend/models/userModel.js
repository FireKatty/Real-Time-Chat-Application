const mongoose  = require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    profilePic:{
        type:String,
        default:""
    }
    // createdAt , updatedAt
},{timestamps:true})

const User = mongoose.model("User",userSchema);
module.exports = User;