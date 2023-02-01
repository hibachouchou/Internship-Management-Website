const Contact = require("../../models/ContactModel")

const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{   await Contact.find({}).then(resultat=>{
        res.send(resultat)}

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;