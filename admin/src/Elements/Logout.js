import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { logout } from "../Helpers/Admin/AuthHelper";
import AuthContext from "./AuthContexe";


export default   function Logout(){
    const navigator=useNavigate()
    const authContexe=useContext(AuthContext)
    const CheckConnection=authContexe.SetConnect
    const Connection=authContexe.Connect
    console.log("Etat Connexion admin :",Connection)
	console.log("Admin Hors Connection")
	CheckConnection(false)
    localStorage.setItem('connection3', "false");
    logout(()=>{
		navigator("/")
        window.location.reload(true)
	})
	
		}