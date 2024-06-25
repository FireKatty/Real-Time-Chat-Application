const express = require("express")
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser")



const authRoutes = require('./routes/authroutes')
const messageRoutes = require('./routes/messageroutes')
const userRoutes = require("./routes/userroutes")

const app = express();
// const port = process.env.port || 5000

const connectToDatabase = require("./db/connectDatabase")

dotenv.config();


app.use(express.json());
app.use(cookieParser());

// app.get('/',(req,res)=>{
//     res.send({error:'hello'})
//     console.log("hello")
// })

app.use('/api/auth',authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(5432,()=>{
    connectToDatabase();
    console.log('Server is Started')
})