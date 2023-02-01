const DemandeEncadrement = require("../../models/DemandeEncadrantModel")

const router = require("express").Router()

router.delete("/:id",async(req,res)=>{
    const idD=req.params.id

    try{  
        
       await DemandeEncadrement.findOneAndDelete({_id:idD}).then(resultat=>{
        res.send(resultat)
    
    },
     // console.log(demande.etat)  

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;