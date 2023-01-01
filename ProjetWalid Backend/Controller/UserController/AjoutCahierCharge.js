//const mongoose =require('mongoose');
const CahierCharge = require("../../models/CahierChargeModel")
const upload = require("../multer")
const router = require("express").Router()

router.post("/",upload,async(req,res)=>{
const {titre,besoinfonctionelle,technologies,file,langue,details,idUser}=req.body
   
  try{
    if(!titre || !besoinfonctionelle ||! technologies  ||!langue || !details ||!idUser)
{ console.log('probleme de donnees ')}else{
 
  let  cahierCharge= await new CahierCharge()
  cahierCharge.titre=titre
  cahierCharge.besoinfonctionelle=besoinfonctionelle
  cahierCharge.technologies=technologies
  cahierCharge.file=file
  cahierCharge.langue=langue
  cahierCharge.details=details
  cahierCharge.userId=idUser
  
   
  await cahierCharge.save(err=>{
   if(err){
      res.send(err)
      console.log(err)
   }else{
   
   res.send({message:"Cahier de charge Aded Successfully"})  
   console.log("Cahier de charge Aded Successfully")
   console.log("User id :",cahierCharge.userId)
   console.log("Cahier de charge id :",cahierCharge._id)
   console.log("file :",cahierCharge.file)
  
   }
  })
}
   
   }catch(err){
    console.log(err)
    res.status(500).send()
       }
  
 
})




module.exports=router;