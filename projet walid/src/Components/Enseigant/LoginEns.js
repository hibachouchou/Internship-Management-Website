//import { Component } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from "axios";
import { isAuth, SetAuthentification2 } from '../../Helpers/Ens/AuthHelper';
import AuthContext2 from './AuthContexe';
import AuthContext from '../User/AuthContexe';

export default function Login2() {
    const authContexe=useContext(AuthContext2)
    const CheckConnection=authContexe.SetConnection
    const Connection=authContexe.Connection
    
    const authContexe2=useContext(AuthContext)
    const CheckConnection2=authContexe2.SetConnect
    const Connection2=authContexe.Connect
    const navigator = useNavigate();
   const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)
    const [enseignant, SetUser] = useState({
        email: "",
        password1: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        SetUser({
            ...enseignant,
            [name]: value
        })


    }

    function loginUser(e) {
        e.preventDefault();
        SetWaitingServer(true)
        setTimeout(()=>{
            const { email, password1 } = enseignant
        if (email && password1) {
            axios.post('http://localhost:5005/loginEnseignant', enseignant)
            .then(res=>{
                console.log(res.data)
                if(!res.ok){
                    SetserverErr(true)
                    SetFinish(true)
                    SetWaitingServer(false)
                    SetData(false)
                    SetErrData(false)
                    SetUser({
                        email: "",
                        password1: ""
                    })
                  }
                if(res.data.errorMessage==='Mot de passe incorrecte'){
                    SetWaitingServer(false)
                    SetserverErr(false)
                    SetData(false)
                    SetErrData(true)
                    SetFinish(true)
                    SetUser({
                        email: "",
                        password1: ""
                    })
                    
                }else{ 
                    SetWaitingServer(false)
                    SetserverErr(false)
                    SetData(true)
                    SetFinish(true)
                    SetErrData(false)
                    SetUser({
                      username: "",
                      email: "",
                      password1: ""
                  })
               
                
                  SetAuthentification2(res.data.token,res.data.ens)
                  if(isAuth){
                    console.log("Welcome Enseigant")
                    CheckConnection(true)
                    CheckConnection2(false)
                    navigator("/Home")

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
    return (
        <div>
                {console.log(enseignant)}
                    {console.log("Enseignant", enseignant)}
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                {Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
         Vérifier vos coordonnées !
        </div>}
        {Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Form de connexion enseignant</h1>
                        <form action="" onSubmit={e => (loginUser(e))}>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <input type="email" className="form-control bg-light border-0" value={enseignant.email} onChange={handleChange} name="email" placeholder="Email" style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">
                                <div className="col-sm-6">
                                    Mot de passe:
                                    <div className="form-group">
                                        <input type="password" className="form-control bg-light border-0" value={enseignant.password1} name="password1" onChange={handleChange} placeholder="Mot de passe" style={{ padding: '30px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row justify-content-center">
                            {!WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-primary btn-block" type="submit" style={{ height: '60px' }}>Se Connecter</button>
                                </div>
}
                                {WaitingServer &&
                                        <div className="col-sm-6">
                                            <button className="btn btn-info btn-block" type="button" style={{ height: '60px' }}>Chargement ... </button>
                                        </div>}
                            </div>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    Vous n'avez  pas un compte ?<NavLink to="/SigneIn_Ensignant"   style={{ color: 'blue' }} className="dropdown-item">S'inscrire</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
