// const mongoose = require("mongoose")

// const MONGO_URI = "mongodb+srv://abhishekkatiyar0203:abhishekkatiyar0203@cluster0.d7f03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const coonectToDatabase = async()=>{
//     try {
//         await mongoose.connect(MONGO_URI)
//         console.log("database connected")
//     } catch (error) {
//         console.log("Error")
//     }
// }

// module.exports  = coonectToDatabase;

const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://abhishekkatiyar0203:abhishekkatiyar0203@cluster0.d7f03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = async () => {
    try {
        // Connecting to MongoDB with a timeout configuration
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // 5 seconds timeout for initial connection
        });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process if database connection fails
    }
};

module.exports = connectToDatabase;
