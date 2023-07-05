const Admin = require("../../models/AdminModel");
const bycrypt=require("bcrypt")
const router = require("express").Router()
const jwt =require("jsonwebtoken");
const { json } = require("body-parser");
require("dotenv").config();



//Login
router.post("/",async (req,res)=>{
    try{
 const {email,password1}=req.body;
 //validation
 if(!email || !password1 ){
    return res
    .status(400)
    .send({errorMessage:"Please enter all required fields ."})
   }

   const adminexist= await Admin.findOne({email})
    if(adminexist){
   const passwordCorrect=await bycrypt.compareSync(password1,adminexist.password)
   if(passwordCorrect){
    //if(password===adminexist.password){
    console.log("Bienvinue Admin") 
             //sign the token
             const token3=jwt.sign({id:adminexist._id},process.env.JWT_SECRET_KEY3,{expiresIn :process.env.JWTExpire})
             console.log(token3)    
const {_id,username,email} =adminexist
res.json({
  token3,
  admin:{_id,username,email}
})

console.log(token3)
console.log(adminexist)
          //send the token in a http only cookie
          {/*
        res.cookie("token",token,{
            httpOnly:true ,
          }).send()
        */}
          
}else{
res.send({errorMessage:"Mot de passe incorrecte"})
 console.log("Mot de passe incorrecte")

}
    }else{
      res.send({errorMessage:"Mot de passe incorrecte"})
        console.log("Mot de passe incorrecte")
      }
   
    }catch(err){
console.log(err)
res.status(500).send()
   }
})


 module.exports=router ;