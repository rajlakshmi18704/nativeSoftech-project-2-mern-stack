const express = require("express");
const  dotenv =require("dotenv")
dotenv.config()
const app = express();
const cors=require("cors")
const connectDB=require("./db.js")
app.use(cors())
connectDB();


const User=require("./models/userModel.js")
const userDataRoute = require("./routes/userData.route.js");

app.use(express.json());


    

app.use("/api/v1/users", userDataRoute);

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server running on this  port",PORT)
    
})
