const mongoose =require('mongoose')

//Creer un table contact
const ContactShema = new mongoose.Schema({
    name: {type:'String',required: true},
    email:{type:'String',required: true},
    objet:{type:'String',required: true},
    msg:{type:'String',required: true},
})

const Contact = new mongoose.model("Contact",ContactShema)


module.exports= Contact;
