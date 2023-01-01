const User = require("../models/UserModel");
const bycrypt=require("bcrypt")
const router = require("express").Router()
const jwt =require("jsonwebtoken")
require("dotenv").config();




router.get("/",async (req,res)=>{
          //send the token in a http only cookie
          res.cookie("token","",{
            httpOnly:true ,
            expires:new Date(0)
          }).send()
        })

 module.exports=router ;