import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { isConnected } from "../Helpers/Admin/AuthHelper";
import AuthContext from "./AuthContexe";



export default function MenuBar(){
	const authContexe=useContext(AuthContext)
//console.log(authContexe)
const CheckConnection=authContexe.SetConnect
//console.log(CheckConnection)
const Connection=authContexe.Connect
console.log("Etat Connexion user :",Connection)
 
//const admin=JSON.parse(localStorage.getItem("admin"))
//console.log(admin)
useEffect(()=>{
	if(isConnected){
	// CheckConnection(true)
	  console.log("User Connectee")
   
	}else{
   //   CheckConnection(false)
	  console.log("User Hors Connexion")
  
	}
},[])
  
if(Connection){
return(<div>

            <div className="sidebar" id="sidebar">

            <div className="sidebar-inner slimscroll">

            <div id="sidebar-menu" className="sidebar-menu">
            <ul>
							<li className="menu-title"> 
								<span></span>
							</li>

                            <li className="active"> 
								<NavLink to="/Home"  style={{textDecoration:'none'}}><i className="fe fe-home"></i> <span>Dashboard Home</span></NavLink>
							</li>
                            <li> 
								<NavLink to="/Profile" style={{textDecoration:'none'}}><i className="fe fe-user"></i> <span>Profil</span></NavLink>
							</li>
							<li> 
								<NavLink to="/Logout" style={{textDecoration:'none'}}><button type="button" className="btn btn-danger">Deconnexion</button></NavLink>
							</li>
							<li className="menu-title"> 
								<span>Pages</span>
							</li>
                            <li> 
								<NavLink to="/ListeProfs" style={{textDecoration:'none'}}><i className="fe fe-users"></i> <span>Enseignants</span></NavLink>
							</li>

                            <li> 
								<NavLink to="/DemandesDeStage" style={{textDecoration:'none'}}> <span>Demandes des stages  </span></NavLink>
							</li>
                            <li> 
								<NavLink to="/CahiersDeCharge" style={{textDecoration:'none'}}><span>Cahiers de charge</span></NavLink>
							</li>
                            <li> 
								<NavLink to="/DemandeEncadrement" style={{textDecoration:'none'}}> <span>Demande d'encadrements</span></NavLink>
							</li>

							<li> 
								<NavLink to="/CVs" style={{textDecoration:'none'}}> <span>CVs</span></NavLink>
							</li>

							<li> 
								<NavLink to="/Soutenances" style={{textDecoration:'none'}}> <span>Planning soutenances</span></NavLink>
							</li>

							<li> 
								<NavLink to="/Contacts" style={{textDecoration:'none'}}> <span>Contact </span></NavLink>
							</li>
                           
            </ul>                
            </div>
            </div>


            </div>

      
		
			</div>

            
)	
}else{
	return(
		<div></div>
	)
}

}