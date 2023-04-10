const mongoose = require("mongoose");


const CalenderSchema=new mongoose.Schema({

    Date:
    {
        type:String,
        required:true
    },
    status:
    {
        type:String,
        required:true
    }
    
 },{timestamps:true});   





const CalenderModel=mongoose.model("CalenderData",CalenderSchema);

module.exports=CalenderModel;
