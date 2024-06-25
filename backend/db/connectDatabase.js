const mongoose = require("mongoose")

const coonectToDatabase = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Chat_Application')
        console.log("database connected")
    } catch (error) {
        console.log("Error")
    }
}

module.exports  = coonectToDatabase;