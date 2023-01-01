const Stage = require("../../models/StageModel")
const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{  
        
     const stage=   await Stage.find({})

res.send(stage)
   }catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;