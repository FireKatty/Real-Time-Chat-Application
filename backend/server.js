const express = require("express")
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser")
const cors = require('cors')
const path = require('path')


const port  = process.env.port
// console.log(port)
const authRoutes = require('./routes/authroutes')
const messageRoutes = require('./routes/messageroutes')
const userRoutes = require("./routes/userroutes")


const connectToDatabase = require("./db/connectDatabase")
const {app,server} = require("./socket/socket")

// const PORT = process.env.PORT || 5432;

// const __dirname = path.resolve();
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow credentials (cookies, authorization headers, TLS client certificates)
};
  
app.use(cors(corsOptions));
  

dotenv.config();


app.use(express.json());
app.use(cookieParser());



app.use('/api/auth',authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
// })


server.listen(port,()=>{
    connectToDatabase();
    console.log('Server is Started',port)
})