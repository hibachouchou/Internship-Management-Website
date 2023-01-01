const mongoose =require('mongoose')

//Creer un table stage
const StageShema = new mongoose.Schema({
    typeStage:{type:Number,default:1,required:true},
    etat:{type:Number,default:0},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},

        nomEtud1:{type:'String',required: true},
        prenomEtud1:{type:'String',required: true},
        emailEtud1:{type:'String',required: true},
        telEtud1:{type:'String',required: true},
        cinEtud1:{type:'String',required: true},
        parcoursEtud1:{type:'String',required: true},
        classeEtud1:{type:'String',required: true},
        codePFEEtud1:{type:'String'},

    nomEtud2:{type:'String'},
    prenomEtud2:{type:'String'},
    emailEtud2:{type:'String'},
    telEtud2:{type:'String'},
    cinEtud2:{type:'String'},
    parcoursEtud2:{type:'String'},
    classeEtud2:{type:'String'},
    codePFEEtud2:{type:'String'},
 
    posteresponsable:{type:'String',required: true},
    emailresponsable:{type:'String',required: true},
    telephoneresponsable:{type:'String',required: true},
    responsable:{type:'String',required: true},
    codepostale:{type:'String',required: true},
    ville:{type:'String',required: true},
    gouvernat:{type:'String',required: true},
    adresseSociete:{type:'String',required: true},
    raisonsociale:{type:'String',required: true},
    nomSociete:{type:'String',required: true},
   
})

const Stage = new mongoose.model("Stage",StageShema)

module.exports= Stage;