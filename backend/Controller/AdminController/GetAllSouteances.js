const Stage = require("../../models/StageModel")
const Soutenance=require("../../models/SoutenaceModel")
const Enseignant=require("../../models/EnsModel")
const DemandeEncadrant =require("../../models/DemandeEncadrantModel")
const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{  
        
     const stage=   await Stage.find({})
     const soutenance=await Soutenance.find({})
     const ens=await Enseignant.find({})
     const demandeE= await DemandeEncadrant.find({})
const data=[stage,soutenance,ens,demandeE]
res.send(data)
   }catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;