const cahiercharge = require("../../models/CahierChargeModel")

const router = require("express").Router()

router.delete("/:id",async(req,res)=>{
    const id=req.params.id

    try{  
        
       await cahiercharge.findOneAndDelete({_id:id}).then(resultat=>{
        res.send(resultat)
    
    },
     // console.log(demande.etat)  

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;