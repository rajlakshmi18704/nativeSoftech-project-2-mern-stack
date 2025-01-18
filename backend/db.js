const mongoose = require("mongoose");
 const connectDB=async()=>{
try {
   const conn= await mongoose 
        .connect(process.env.MONGO_URI)
        console.log("mongoDB connected")
        
} catch (error)
 {
    console.log("Error in connecting to mongoDB",error.message
      
    )
    process.exit(1)
}
}
module.exports = connectDB;