const Admin = require("../../models/AdminModel")

const router = require("express").Router()

router.get("/",async(req,res)=>{


    try{   await Admin.findOne({}).then(resultat=>{
        res.send(resultat)}

   )}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;