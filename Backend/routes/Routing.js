const express = require("express");

const CalenderModel = require("../models/ClenderSchema");

const router = express.Router();

// const {requireRegister,requireLogin,TodoData} = require("../Authentication/controller/routingFunctions");


router.post("/present",async (req,res)=>
{
  try {

    let result = await new CalenderModel(req.body);
  let SavedTodoData = await result.save();

  res.status(200).json({ message:"Present applied successfully!!",Data:result });
  return
    
  } catch (error) {

    res.status(500).json({message:"Internal Server error",error:error})
    return;
    
  }

  

});

router.get("/present",async (req,res)=>
{

try {

  let data= await CalenderModel.find();
   
   if(data.length==0)
   {
   
    res.status(400).json({message:"there are no data in database"})
    return;
   }
  
   
   res.status(200).json({message:"successfull",Data:data});
   return;
  
} catch (error) {

  res.status(500).json({message:"Internal Server error",error:error})
    return;


  
}


});









module.exports = router;