const Stage = require("../../models/StageModel")
const demandeEncadrement=require("../../models/DemandeEncadrantModel")
const Enseignant= require("../../models/EnsModel")
const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{  
        
     const stage=   await Stage.find({})
     const demandeE=await demandeEncadrement.find({})
     const ens=await Enseignant.find({})
const data=[stage,demandeE,ens]
res.send(data)
   }catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;