import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { logout } from "../Helpers/Admin/AuthHelper";
import AuthContext from "./AuthContexe";


export default   function Logout(){
    const navigator=useNavigate()
    const authContexe=useContext(AuthContext)
    //console.log(authContexe)
    const CheckConnection=authContexe.SetConnect
    //console.log(CheckConnection)
    const Connection=authContexe.Connect
    console.log("Etat Connexion user :",Connection)
	console.log("User Hors Connection")
	CheckConnection(false)
    logout(()=>{
		navigator("/ConnexionAdmin")
	})
	
		}