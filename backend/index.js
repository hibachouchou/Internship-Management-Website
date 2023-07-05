const express = require("express")
const app = express();
const cors = require('cors')
const mongoose =require('mongoose');
const cookieParser = require("cookie-parser");

const PORT =process.env.PORT || 5005;
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
  origin:["http://localhost:3000","http://localhost:3001","http://localhost:3002"],
  credentials:true
}))

//connexion à la base donnees
mongoose.connect('mongodb://localhost:27017/projetwalid',{
    useUnifiedTopology:true,
    useNewUrlParser:true
},(err)=>{
  if(err){ return console.log("Err de connexion bd")}  else {return console.log("DB connected")}
})


//set up routes
//
app.use("/register",require("./Routers/User/InscriptionUser"))
app.use("/login",require("./Routers/User/ConnexionUser"))
////Logout route
app.use("/logout",require("./Routers/Logout"))
//Enseignant auth routes
app.use("/registerEnseigant",require("./Routers/Ens/EnsInscription"))
app.use("/loginEnseignant",require("./Routers/Ens/EnsConnexion"))
//admin auth routes
app.use("/registerAdmin",require("./Routers/Admin/AdminInscription"))
app.use("/loginAdmin",require("./Routers/Admin/AdminConnexion"))

//user controller
//
app.use("/demanderStage",require("./Controller/UserController/AjoutStage"))
app.use("/RemplirCV",require("./Controller/UserController/AjoutCV"))
app.use("/cahiercharge",require("./Controller/UserController/AjoutCahierCharge"))
app.use("/demandeEncadrement",require("./Controller/UserController/AjoutDemandeEncadrant"))
//
app.use("/getAllEns",require("./Controller/EnsController/GetAllEns"))
//
app.use("/getDetailsUser/",require("./Controller/UserController/getDetailUserById"))
//
app.use("/getDetailsEns/",require("./Controller/EnsController/GetDetailsEns"))
//
app.use("/AccepterDemande",require("./Controller/EnsController/AccepterDemande"))
app.use("/RefuserDemande",require("./Controller/EnsController/RefuserDemande"))
//
app.use("/SupprimerDemande",require("./Controller/UserController/SupprimerDemande"))
app.use("/SupprimerDemande2",require("./Controller/UserController/SupprimerDemande2"))
//
app.use("/getDetailsCahierCharge/",require("./Controller/EnsController/CahierDeChargeByID"))
//
//Admin Controller
app.use("/getAllCVs",require("./Controller/AdminController/GetAllCVs"))
app.use("/getAllStages",require("./Controller/AdminController/GetAllDemandeDeStage"))
app.use("/getAllCahiersDecahrges",require("./Controller/AdminController/GetAllCahierDeCharge"))
app.use("/getAllDemandeEncadrements",require("./Controller/AdminController/GetDemandeEncadrements"))
app.use("/AccepterDemande2",require("./Controller/AdminController/AccepterDemandeEncadrement"))
app.use("/RefuserDemande2",require("./Controller/AdminController/RefuserDemandeEncadrement"))
app.use("/getCahierChargeById/",require("./Controller/AdminController/GetCahierDeChargeById"))
app.use("/getDemandeStageById/",require("./Controller/AdminController/GetDemandeStageById"))
app.use("/ValiderCahierCharge/",require("./Controller/AdminController/ValiderCahierDeCharge"))
app.use("/RefuserCahierCharge/",require("./Controller/AdminController/NonValiderCahierDeCharge"))
app.use("/soutenance",require("./Controller/AdminController/GestionSoutenace"))
app.use("/getAllSoutenances",require("./Controller/AdminController/GetAllSouteances"))
app.use("/getAdminProfile",require("./Controller/AdminController/GetAdminProfil"))
app.use("/getAllContacts",require("./Controller/AdminController/GetAllContacts"))
//
app.use("/Contact",require("./Controller/CreerContact"))
app.listen(PORT,()=> console.log('Server ready to connect'))