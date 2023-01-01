const User = require("../../models/UserModel");
const bycrypt=require("bcrypt")
const router = require("express").Router()
const jwt =require("jsonwebtoken");
const { json } = require("body-parser");
require("dotenv").config();



//Login
router.post("/",async (req,res)=>{
    try{
 const {email,password}=req.body;
 //validation
 if(!email || !password ){
    return res
    .status(400)
    .send({errorMessage:"Please enter all required fields ."})
   }

   const userexist= await User.findOne({email})
    if(userexist){
   //const passwordCorrect=await bycrypt.compareSync(password,userexist.passwordHash)
   //if(passwordCorrect){
    if(password===userexist.password){
    console.log("Bienvinue User") 
             //sign the token
             const token=jwt.sign({id:userexist._id},process.env.JWT_SECRET_KEY1,{expiresIn :process.env.JWTExpire})
             console.log(token)    
const {_id,username,email} =userexist
res.json({
  token,
  user:{_id,username,email}
})


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