const express = require("express");

const CalenderModel = require("../models/ClenderSchema");

const router = express.Router();

// const {requireRegister,requireLogin,TodoData} = require("../Authentication/controller/routingFunctions");


router.post("/present",async (req,res)=>
{

  let result = await new CalenderModel(req.body);
  let SavedTodoData = await result.save();
  console.log(result)
  res.status(200).json({ message:"Present applied successfully!!",Data:result });


});

router.get("/present",async (req,res)=>
{


let data= await CalenderModel.find();
   
   if(data.length==0)
   {
   
    res.status(400).json({message:"there are no data in database"})
    return;
   }
  
   
   res.status(200).json({message:"successfull",Data:data});
   return;

});

router.delete("/task/delete/:_id", async (req,resp)=>
{
   

    try {

      let data=await TodoModel.findOne(req.params);
      console.log(data)
    
           let newData=await TodoModel.deleteOne(req.params);
      resp.status(200).json({message:"Task Deleted successfully"});
      return;
  
      
  
    
  
    } catch (error) {

      console.log("no data")
      resp.status(404).json({message:"There is no data with this id in the database"});
      return
      
    }
    


 
});

router.put("/task/update/:_id", async (req,resp)=>
{
   

    try {

      let data=await TodoModel.findOne(req.params);
      console.log(data)
    
      let newData=await TodoModel.updateOne(req.params,{$set:req.body});
      resp.status(200).json({message:"Task updated successfully"});
      return;
  
      
  
    
  
    } catch (error) {

      console.log("no data")
      resp.status(404).json({message:"There is no data with this id in the database"});
      return
      
    }
    


 
});

router.get("/task/:_id", async (req,resp)=>
{
   

    try {

      let data=await TodoModel.findOne(req.params);
      resp.status(200).json({message:"successfull",data:data});
    
          
      
      return;
  
      
  
    
  
    } catch (error) {


      resp.status(404).json({message:"There is no data with this id in the database"});
      return
      
    }
    


 
});



module.exports = router;