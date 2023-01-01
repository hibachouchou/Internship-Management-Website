//const mongoose =require('mongoose');
const Stage = require("../../models/StageModel")
const router = require("express").Router()

router.post("/",async(req,res)=>{
const {nom,prenom,parcours,classe,cin,tel, email ,
nom1,prenom1,parcours1,classe1,cin1,tel1, email1 ,
posteresponsable,emailresponsable, telephoneresponsable,responsable,codepostale,ville,gouvernat,adresseSociete,raisonsociale, nomSociete,
typeStage,idUser}=req.body
   
  try{
    if(!nom || !prenom ||! parcours ||!classe || !cin ||!tel || !email ||
     ! posteresponsable || !emailresponsable || !telephoneresponsable || !responsable || !codepostale ||! ville || !gouvernat || !adresseSociete ||! raisonsociale || ! nomSociete ||
     ! typeStage ||!idUser)
{ console.log('probleme de donnees ')}else{
 
  let  stage= await new Stage()

  stage.typeStage=typeStage,
  stage.userId=idUser ,

  stage. nomEtud1= nom,
  stage.prenomEtud1= prenom,
  stage.emailEtud1=email,
  stage.telEtud1= tel,
  stage.cinEtud1= cin,
  stage.parcoursEtud1= parcours,
  stage.classeEtud1= classe,
  
  stage.nomEtud2= nom1,
  stage.prenomEtud2= prenom1,
  stage.emailEtud2=email1,
  stage.telEtud2= tel1,
  stage.cinEtud2= cin1,
  stage.parcoursEtud2=parcours1,
  stage.classeEtud2=classe1,
  
  stage.posteresponsable=posteresponsable,
  stage.emailresponsable= emailresponsable,
  stage.telephoneresponsable= telephoneresponsable,
  stage.responsable=responsable,
  stage.codepostale= codepostale,
  stage.ville= ville,
  stage.gouvernat= gouvernat,
  stage.adresseSociete= adresseSociete,
  stage.raisonsociale=raisonsociale,
  stage.nomSociete= nomSociete,
  
   
  await stage.save(err=>{
   if(err){
      res.send(err)
      console.log(err)
   }else{
   
   res.send({message:"Stage Aded Successfully"})  
   console.log("Stage Aded Successfully")
   console.log("User id",stage.userId)
   console.log("Stage id",stage._id)
   }
  })
}
   
   }catch(err){
    console.log(err)
    res.status(500).send()
       }
  
 
})




module.exports=router;