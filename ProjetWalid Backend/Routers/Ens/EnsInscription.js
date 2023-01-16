const Enseignant = require("../../models/EnsModel");
const bycrypt=require("bcrypt")
const router = require("express").Router()
require("dotenv").config();

//Registration
router.post("/",async (req,res)=>{
   try{
    
    const { nom, prenom, tel, email, password1 } =req.body;
    Enseignant.findOne({email:email},async (err,ens)=>{
        //validation
       if(!email || !password1 ||!nom ||!tel ||!prenom){
        return res
        .send({errorMessage:"Please enter all required fields ."})
       }

//hash password 
const salt=await bycrypt.genSalt(10);
const password=await bycrypt.hash(password1,salt)

        if(ens){
   
           res.send({errorMessage:"Enseigant already existe"})
            console.log("Enseigant already existe")
        }else{
           
                const ens= await new Enseignant({
                    nom,
                    prenom,
                    email,
                    tel,
                   password
                })

                ens.save(err=>{
                    if(err){
                       res.send(err)
                      //  res.json({message:"Registration Enseigant failed"})
                       console.log("Registration Enseigant failed")
                    }else{
                    
                    res.send({message:"Enseigant Aded Successfully"})  
                    console.log("Enseigant Aded Successfully")

                    }
                })
            }})

   }catch(err){
console.log(err)
res.status(500).send()
   }
  
})
    









 module.exports=router ;