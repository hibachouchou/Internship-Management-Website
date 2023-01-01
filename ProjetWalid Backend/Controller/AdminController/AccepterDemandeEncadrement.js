const DemandeEncadrement = require("../../models/DemandeEncadrantModel")

const router = require("express").Router()

router.put("/:id",async(req,res)=>{
    const idD=req.params.id

    try{  
        
        const demande =await DemandeEncadrement.findOneAndUpdate({_id:idD},{$set:{etat:2}}).then(resultat=>{
        res.send(resultat)
    
    },
     // console.log(demande.etat)  

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;