//const mongoose =require('mongoose');
const CV = require("../../models/CVModel")
const router = require("express").Router()

router.post("/",async(req,res)=>{
const {nom,prenom,parcours,Compétance,profil,numero, email ,idUser}=req.body
   
  try{
    if(!nom || !prenom ||! parcours ||!Compétance  ||!numero || !email ||!idUser)
{ console.log('probleme de donnees ')}else{
 
  let  cv= await new CV()
  cv.nom=nom
  cv.prenom=prenom
  cv.email=email
  cv.numero=numero
  cv.profil=profil
  cv.parcours=parcours
  cv.Compétance=Compétance
  cv.userId=idUser
  
   
  await cv.save(err=>{
   if(err){
      res.send(err)
      console.log(err)
   }else{
   
   res.send({message:"CV Aded Successfully"})  
   console.log("CV Aded Successfully")
   console.log("User id :",cv.userId)
   console.log("CV id :",cv._id)
  
   }
  })
}
   
   }catch(err){
    console.log(err)
    res.status(500).send()
       }
  
 
})




module.exports=router;