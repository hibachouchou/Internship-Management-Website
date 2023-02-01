const mongoose =require('mongoose')

//Creer un table Cahier de charge
const CahierChargeShema = new mongoose.Schema({
    titre:{type:'String',required: true},
    besoinfonctionelle:{type:'String',required: true},
    technologies:{type:'String',required: true},
    file:{type:'Object'},
    langue:{type:'String',required: true},
    details:{type:'Array',required: true},
    etat:{type:Number,default:0},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})

const CahierCharge = new mongoose.model("CahierCharge",CahierChargeShema)

module.exports= CahierCharge;