
const DemandeEncadrement = require("../../models/DemandeEncadrantModel")
const router = require("express").Router()

router.post("/",async(req,res)=>{
const {idEns ,idUser}=req.body
   
  try{
    if(!idEns || !idUser)
{ console.log('probleme de donnees ')}else{
 
  let  demandeEncadrement= await new DemandeEncadrement()
  demandeEncadrement.ensId=idEns,
  demandeEncadrement.userId=idUser
  
   
  await demandeEncadrement.save(err=>{
   if(err){
      res.send(err)
      console.log(err)
   }else{
   
   res.send({message:"Demande Encadrement Aded Successfully"})  
   console.log("Demande Encadrement Aded Successfully")
   console.log("User id :",demandeEncadrement.userId)
   console.log("Ens id :",demandeEncadrement.ensId)
   console.log("demandeEncadrement id :",demandeEncadrement._id)
  
   }
  })
}
   
   }catch(err){
    console.log(err)
    res.status(500).send()
       }
  
 
})




module.exports=router;