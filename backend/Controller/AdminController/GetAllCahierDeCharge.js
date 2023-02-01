const Stage = require("../../models/StageModel")
const cahiercharge=require("../../models/CahierChargeModel")
const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{  
        
     const stage=   await Stage.find({})
     const cahier_charge=await cahiercharge.find({})
const data=[stage,cahier_charge]
res.send(data)
   }catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;