const mongoose =require('mongoose')

//Creer un table user
const AdminShema = new mongoose.Schema({
    username: {type:'String',required: true},
    email:{type:'String',required: true},
    password:{type:'String',required: true},
})

const Admin = new mongoose.model("Admin",AdminShema)


module.exports= Admin;
