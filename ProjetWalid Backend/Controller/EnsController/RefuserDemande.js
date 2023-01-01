const DemandeEncadrement = require("../../models/DemandeEncadrantModel")

const router = require("express").Router()

router.put("/:id",async(req,res)=>{
    const idD=req.params.id

    try{   await DemandeEncadrement.findOneAndUpdate({_id:idD},{$set:{etat:-1}}).then(resultat=>{
        res.send(resultat)}

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;