const mongoose =require('mongoose')


//Creer un table DemandeEncadrement
const DemandeEncadrementShema = new mongoose.Schema({
    etat:{type:Number,default:0},
    ensId:{type:mongoose.Schema.Types.ObjectId,ref:"Enseignant"},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})

const DemandeEncadrement = new mongoose.model("DemandeEncadrement",DemandeEncadrementShema)

module.exports= DemandeEncadrement;