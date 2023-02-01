
const { response } = require("express")
const Cahiercharge=require("../../models/CahierChargeModel")
const DemandeEncadrement = require("../../models/DemandeEncadrantModel")


const router = require("express").Router()

router.get("/:id",async(req,res)=>{

const id1=req.params.id
    try{   
       // console.log(id1)

   await Cahiercharge.findOne({_id:id1}).then(response=>  res.json(response))
  

}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;