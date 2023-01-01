const mongoose =require('mongoose')


//Creer un table Cv
const CVShema = new mongoose.Schema({
    nom:{type:'String',required: true},
    prenom:{type:'String',required: true},
    email:{type:'String',required: true},
    numero:{type:'String',required: true},
    profil:{type:'String'},
    parcours:{type:'String',required: true},
    Compétance:{type:'Array',required: true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})

const CV = new mongoose.model("CV",CVShema)

module.exports= CV;