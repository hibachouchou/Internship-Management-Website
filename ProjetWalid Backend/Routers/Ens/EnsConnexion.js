const Enseigant = require("../../models/EnsModel");
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

   const ensexist= await Enseigant.findOne({email})
    if(ensexist){
   //const passwordCorrect=await bycrypt.compareSync(password,userexist.passwordHash)
   //if(passwordCorrect){
    if(password===ensexist.password){
    console.log("Bienvinue Enseigant") 
             //sign the token
             const token2=jwt.sign({id:ensexist._id},process.env.JWT_SECRET_KEY2,{expiresIn :process.env.JWTExpire})
             console.log(token2)    
const {_id,nom,prenom,tel,email} =ensexist
res.json({
  token2,
  ens:{_id,nom,prenom,tel,email}
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