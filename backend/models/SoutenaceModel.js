const mongoose =require('mongoose')


//Creer un table Soutenance
const SoutenanceShema = new mongoose.Schema({
    salle:{type:String,required:true},
    date:{type:String,required:true},
    heure:{type:String,required:true},
    presidantId:{type:mongoose.Schema.Types.ObjectId,ref:"Enseignant"},
    rapporteurId:{type:mongoose.Schema.Types.ObjectId,ref:"Enseignant"},
    stageId:{type:mongoose.Schema.Types.ObjectId,ref:"Stage"}
})

const Soutenance = new mongoose.model("Soutenance",SoutenanceShema)

module.exports= Soutenance;