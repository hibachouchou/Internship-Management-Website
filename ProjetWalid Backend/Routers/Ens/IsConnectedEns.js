const bycrypt=require("bcrypt")
const router = require("express").Router()
const jwt =require("jsonwebtoken");
require("dotenv").config();


router.get("/",(req,res)=>{
    try{
const token=req.cookies.token;
if(!token) {return res.json(false)}else{

    jwt.verify(token,process.env.JWT_SECRET_KEY2)
    res.send(true)
}

    }catch(err){
console.log(err)
res.json(false)
    }

})

module.exports=router