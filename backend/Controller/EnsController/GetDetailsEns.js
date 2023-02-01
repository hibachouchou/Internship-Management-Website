const User = require("../../models/UserModel")
const Enseignant = require("../../models/EnsModel")
const Stage=require("../../models/StageModel")
const DemandeEncadrement =require("../../models/DemandeEncadrantModel")

const router = require("express").Router()

router.get("/:id",async(req,res)=>{

const idEns=req.params.id
    try{   
     // console.log(idEns)
      const enseignant= await Enseignant.findById(idEns)
      const demandeEncadrement=await DemandeEncadrement.find({ensId:idEns})
      console.log(demandeEncadrement[0])
      console.log(demandeEncadrement[1])
      console.log(demandeEncadrement[2])
      demandeEncadrement.forEach(async element => {
      const stage= await Stage.find({userId:element.userId})
      // console.log(stage)
     // res.json(stage)
       } )   
   
/
demandeEncadrement.map(async item=>{
     // console.log(item.userId)
   const  stage=await Stage.find({userId:item.userId})

    })
var tab=[]
    for(i=0;i<demandeEncadrement.length;i++){
      const item =demandeEncadrement[i]
      var stage=  await Stage.find({userId:item.userId})
      tab.push(stage)
      //console.log(stage)
   }
   console.log(tab)
    const data=[enseignant,demandeEncadrement,tab]
    //console.log(data)
     res.json(data)
  
 
      }catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;