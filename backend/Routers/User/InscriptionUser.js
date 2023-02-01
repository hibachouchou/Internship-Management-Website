const User = require("../../models/UserModel");
const bycrypt=require("bcrypt")
const router = require("express").Router()
require("dotenv").config();

//Registration
router.post("/",async (req,res)=>{
   try{
    
    const {username,email,password1}=req.body;
    User.findOne({email:email},async (err,user)=>{
        //validation
       if(!email || !password1 ||!username){
        return res
        .send({errorMessage:"Please enter all required fields ."})
       }

//hash password 
const salt=await bycrypt.genSalt(10);
const password=await bycrypt.hash(password1,salt)

        if(user){
   
           res.send({errorMessage:"User already existe"})
            console.log("User already existe")
        }else{
           
                const user= await new User({
                    username,
                    email,
                   password
                })
                
                user.save(err=>{
                    if(err){
                       res.send(err)
                      //  res.json({message:"Registration user failed"})
                       console.log("Registration user failed")
                    }else{
                    
                    res.send({message:"User Aded Successfully"})  
                    console.log("User Aded Successfully")

                    }
                })
            }})

   }catch(err){
console.log(err)
res.status(500).send()
   }
  
})
    









 module.exports=router ;