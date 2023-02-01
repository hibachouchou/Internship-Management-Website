const mongoose =require('mongoose')

//Creer un table user
const UserShema = new mongoose.Schema({
    username: {type:'String',required: true},
    email:{type:'String',required: true},
    password:{type:'String',required: true},
})

const User = new mongoose.model("User",UserShema)


module.exports= User;
