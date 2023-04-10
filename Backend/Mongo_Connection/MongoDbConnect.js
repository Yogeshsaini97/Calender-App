const mongoose = require("mongoose");
require("dotenv").config();

const mongoDbUri = process.env.MONGO_URI



mongoose.set("strictQuery",false);







const Mongodbconnect= async ()=>{
    try {
        let Data=await mongoose.connect(mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true });
     
    
     
     } catch (error) {

        console.log("error connecting to mongodb",error)
     
         
     }
     

}




module.exports=Mongodbconnect;





