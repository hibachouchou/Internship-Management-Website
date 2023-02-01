
const Cahiercharge=require("../../models/CahierChargeModel")
const DemandeEncadrement = require("../../models/DemandeEncadrantModel")


const router = require("express").Router()

router.get("/:id",async(req,res)=>{

const idUser=req.params.id
    try{   
        console.log(idUser)

      const cahiercharge=await Cahiercharge.findOne({userId:idUser})
      const demandeEncadrement= await DemandeEncadrement.findOne({userId:idUser})
      const data=[cahiercharge,demandeEncadrement]
     console.log(data)
    res.send(data)

}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;