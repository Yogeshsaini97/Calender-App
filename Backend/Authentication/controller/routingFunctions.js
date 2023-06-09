const express = require("express");
const CalenderModel = require("../../models/ClenderSchema");


exports.requireRegister = async function (req, res, next) {

  





  let data = await userRegistrationModel.findOne({ email: req.body.email });

  if (!data) {
    bcrypt.genSalt(10, async function (err, salt) {
      bcrypt.hash(req.body.password, salt, async function (err, hash) {
        req.body.password = hash;
        

        let _user = await new userRegistrationModel(req.body);
        let userdata = await _user.save().then(() => {
        
        });

        res.status(200).json({ message: "user created successfully!!",Data:_user });
       
      });
    });
    return;
  }

  res.status(400).json({ message: "user already registered" });


  return;
};

exports.requireLogin = async function (req, res, next) {
  let data = await userRegistrationModel.findOne({ email: req.body.email });
  
  if (data) {
    bcrypt.compare(req.body.password, data.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ id: data._id,role:data.role }, 'yogesh',{expiresIn:"1h"});
      
        res.status(200).json({token:token, message: "Perfect" });
        return;
      } else {
        res.status(400).json({ message: "wrong password" });
        return;
      }
    });
  } else {
    res.status(400).json({ message: "user doesn,t exist! please create new user" });
  }

  return;
};

