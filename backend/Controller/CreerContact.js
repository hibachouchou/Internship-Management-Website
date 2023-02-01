const Contact = require("../models/ContactModel")
const router = require("express").Router()

router.post("/",async(req,res)=>{
const {nom,email,object,msg}=req.body
   
  try{
    if(!nom || !email ||! object ||!msg  )
{ console.log('probleme de donnees ')}else{
 
  let  contact= await new Contact()
  contact.name=nom,
  contact.email=email,
  contact.objet=object,
  contact.msg=msg,

  
   
  await contact.save(err=>{
   if(err){
      res.send(err)
      console.log(err)
   }else{
   
   res.send({message:"Contact Aded Successfully"})  
   console.log("Contact Aded Successfully")

   }
  })
}
   
   }catch(err){
    console.log(err)
    res.status(500).send()
       }
  
 
})




module.exports=router;