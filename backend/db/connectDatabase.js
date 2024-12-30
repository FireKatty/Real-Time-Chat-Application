const mongoose = require("mongoose")

const MONGO_URI = "mongodb+srv://abhishekkatiyar0203:abhishekkatiyar0203@cluster0.d7f03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const coonectToDatabase = async()=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.log("Error")
    }
}

module.exports  = coonectToDatabase;