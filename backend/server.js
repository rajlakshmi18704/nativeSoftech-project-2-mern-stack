const express = require("express");
const  dotenv =require("dotenv")
dotenv.config()
const app = express();
const cors=require("cors")
app.use(cors())
const mongoose = require("mongoose");


const User=require("./models/userModel.js")
const userDataRoute = require("./routes/userData.route.js");

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
    
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
    
})

app.use("/api/v1/users", userDataRoute);

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server running on this  port",PORT)
    
})
