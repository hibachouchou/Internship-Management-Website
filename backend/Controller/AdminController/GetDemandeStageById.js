//Get Etud1 By id
//Get Etud2 By id
//Get Societe By id
const Stage = require("../../models/StageModel")
const router = require("express").Router()

router.get("/:id",async(req,res)=>{
    const id1=req.params.id

    try{  
     const stage=   await Stage.findOne({_id:id1})
res.send(stage)
   }catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;
