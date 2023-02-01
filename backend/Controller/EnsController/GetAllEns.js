const Enseignant = require("../../models/EnsModel")

const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{   await Enseignant.find({}).then(resultat=>{
        res.send(resultat)}

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;