const Soutenance = require("../../models/SoutenaceModel")
const router = require("express").Router()

router.post("/",async(req,res)=>{
const {idStage,Salle,Heure,Date,Presidant,Rapporteur}=req.body
   
  try{
    if(!idStage || !Salle ||! Heure ||!Date  ||!Presidant || !Rapporteur )
{ console.log('probleme de donnees ')}else{
 
  let  soutenance= await new Soutenance()
  soutenance.salle=Salle,
  soutenance.date=Date,
  soutenance.heure=Heure,
  soutenance.presidantId=Presidant,
  soutenance.rapporteurId=Rapporteur,
  soutenance.stageId=idStage
  
   
  await soutenance.save(err=>{
   if(err){
      res.send(err)
      console.log(err)
   }else{
   
   res.send({message:"Soutenance Aded Successfully"})  
   console.log("Soutenance Aded Successfully")

   }
  })
}
   
   }catch(err){
    console.log(err)
    res.status(500).send()
       }
  
 
})




module.exports=router;