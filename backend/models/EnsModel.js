const mongoose =require('mongoose')

//Creer un table enseingnat
const EnseiganttShema = new mongoose.Schema({
    nom: {type:'String',required: true},
    prenom:{type:'String',required: true},
    tel: {type:'String',required: true},
    email:{type:'String',required: true},
    password:{type:'String',required: true},
})


const Enseignant = new mongoose.model("Enseignant",EnseiganttShema)

module.exports= Enseignant;