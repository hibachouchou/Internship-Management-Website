const CV = require("../../models/CVModel")

const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{   await CV.find({}).then(resultat=>{
        res.send(resultat)}

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;