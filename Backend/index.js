const Mongodbconnect = require("./Mongo_Connection/MongoDbConnect");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/Routing");

console.log("bye")

Mongodbconnect().then(()=>
{
  app.use(express.json());
  const PORT=5000;

app.use(cors());

app.use("/Calender", userRouter);



app.listen(PORT, () => {
    console.log("server is running");
  });

});



  


