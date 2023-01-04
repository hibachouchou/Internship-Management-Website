import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { isConnected, SetAuthentification } from "../Helpers/Admin/AuthHelper";
import AuthContext from "./AuthContexe";

export default function LoginAdmin(){

    const authContexe=useContext(AuthContext)
    const CheckConnection=authContexe.SetConnect
    const Connection=authContexe.Connect
    const navigator = useNavigate();
    const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)
    const [admin, SetAdmin] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        SetAdmin({
            ...admin,
            [name]: value
        })


    }
    function loginAdmin(e) {
        e.preventDefault();
        SetWaitingServer(true)
        setTimeout(()=>{
        const { email, password } = admin
        if (email && password) {
            axios.post('http://localhost:5005/loginAdmin', admin)
            .then(res=>{
                console.log(res.data)
                if(!res.ok){
                    SetserverErr(true)
                    SetFinish(true)
                    SetWaitingServer(false)
                    SetData(false)
                    SetErrData(false)
                    SetAdmin({
                        email: "",
                        password: ""
                    })
                  }
                if(res.data.errorMessage==='Mot de passe incorrecte'){
                    SetWaitingServer(false)
                    SetserverErr(false)
                    SetData(false)
                    SetErrData(true)
                    SetFinish(true)
                    SetAdmin({
                        email: "",
                        password: ""
                    })
                    
                }else{ 
                    SetWaitingServer(false)
                    SetserverErr(false)
                    SetData(true)
                    SetFinish(true)
                    SetErrData(false)
                    SetAdmin({
                      username: "",
                      email: "",
                      password: ""
                  })
               
                
                  SetAuthentification(res.data.token3,res.data.admin)
                  if(isConnected){
                    console.log("Welcome Admin")
                    CheckConnection(true)
                    navigator('/Home')

                  }
                }
               
               }
              
              
               )
               
              
               .then(()=>{
                setTimeout(()=>{
                 SetErrData(false)
                 SetData(false)
                  SetFinish(false)
                  SetserverErr(false)
            },4000) } )
           
            } else {
                SetData(false)
                SetFinish(false)
                SetErrData(false)
                SetserverErr(true)
            }
        },4000);
        }
        if(!Connection){
           return(
        <div>
			               
                    {console.log("Admin", admin)}
                 
                        {Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
         Vérifier vos coordonnées !
        </div>}
        {Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 

             <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">

                    <div className="login-left">
							<img className="img-fluid" />
                    </div>

                    <div className="login-right">
							<div className="login-right-wrap">
								<h1>Connexion Admin</h1>
								<p className="account-subtitle"></p>
								
								
								<form  onSubmit={e => (loginAdmin(e))} >
									<div className="form-group">
                                        Email :
										<input className="form-control" type="text" name="email" value={admin.email} onChange={handleChange} placeholder="Email"/>
									</div>
									<div className="form-group">
                                        Mot de Passe :
										<input className="form-control" type="password" name="password" value={admin.password} onChange={handleChange} placeholder="Mot de Passe"/>
									</div>
									{!WaitingServer &&
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit">Se Connecter</button>
									</div>}
									{WaitingServer &&
									<div className="form-group">
										<button className="btn btn-info btn-block" type="button">Chargement ...</button>
									</div>}
								</form>
								
								
								<div className="text-center forgotpass"><a href="forgot-password.html">Mot de pasee oublié ?</a></div>
								<div className="login-or">
									<span className="or-line"></span>
									
								</div>
								  
								
								
								
								
								
							</div>
                        </div></div></div></div>
                        
                        </div>
                       
        </div>
    )   
        }else{
            return(
                <div></div>
            )
        }
  
}