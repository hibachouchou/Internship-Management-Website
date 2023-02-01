const Admin = require("../../models/AdminModel");
const bycrypt=require("bcrypt")
const router = require("express").Router()
require("dotenv").config();

//Registration
router.post("/",async (req,res)=>{
   try{
    
    const {username,email,password1}=req.body;
    Admin.findOne({email:email},async (err,admin)=>{
        //validation
       if(!email || !password1 ||!username){
        return res
        .send({errorMessage:"Please enter all required fields ."})
       }

//hash password 
const salt=await bycrypt.genSalt(10);
const password=await bycrypt.hash(password1,salt)


        if(admin){
           res.send({errorMessage:"Admin already existe"})
            console.log("Admin already existe")
        }else{
           
                const admin= await new Admin({
                    username,
                    email,
                   password
                })
                
                admin.save(err=>{
                    if(err){
                       res.send(err)
                      //  res.json({message:"Registration Admin failed"})
                       console.log("Registration Admin failed")
                    }else{
                    
                    res.send({message:"Admin Aded Successfully"})  
                    console.log("Admin Aded Successfully")

                    }
                })
            }})

   }catch(err){
console.log(err)
res.status(500).send()
   }
  
})
    









 module.exports=router ;