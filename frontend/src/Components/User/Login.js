
import { NavLink, useNavigate } from 'react-router-dom';

import axios from "axios";
import { useContext, useState } from "react";
import { isConnected, SetAuthentification } from '../../Helpers/User/AuthHelper';
import AuthContext from './AuthContexe';
import AuthContext2 from '../Enseigant/AuthContexe';

export default function Login() {

    const authContexe=useContext(AuthContext)
    const CheckConnection=authContexe.SetConnect
    const Connection=authContexe.Connect

    const authContexe2=useContext(AuthContext2)
    const CheckConnection2=authContexe2.SetConnection
    const Connection2=authContexe.Connection

    const navigator = useNavigate();
   const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)
    const [user, SetUser] = useState({
        email: "",
        password1: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        SetUser({
            ...user,
            [name]: value
        })


    }
    function loginUser(e) {
        e.preventDefault();
        SetWaitingServer(true)
        setTimeout(()=>{
        const { email, password1 } = user
        if (email && password1) {
            axios.post('http://localhost:5005/login', user)
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
               
                
                  SetAuthentification(res.data.token,res.data.user)
                  if(isConnected){
                    console.log("Welcome User")
                    CheckConnection(true)
                    localStorage.setItem('connection1', true);
                    CheckConnection2(false)
                  // navigator(`/ProfileEtud/${idUser}`)
                    localStorage.setItem('connection2', false);
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
{/*

  if(Connection){
            return(
                <div></div>
            )
        }else{}
*/}
      
            return (
                <div>
                    {console.log(user)}
                    {console.log("Etudiant", user)}
                    <div className="row justify-content-center bg-image mx-0 mb-5">
                        <div className="col-lg-6 py-5">
                        {Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
         Vérifier vos coordonnées !
        </div>}
        {Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 

                            <div className="bg-white p-5 my-5">
                                <h1 className="text-center mb-4">Form de connexion</h1>
                                <form action="" onSubmit={e => (loginUser(e))}>
                                    <div className="form-row justify-content-center">
        
                                        <div className="col-sm-6">
                                            Email :
                                            <div className="form-group">
                                                <input type="email" className="form-control bg-light border-0" required placeholder="Email" value={user.email} onChange={handleChange} name="email" style={{ padding: '30px' }} />
                                            </div>
                                        </div></div>
                                    <div className="form-row justify-content-center">
                                        <div className="col-sm-6">
                                            Mot de passe :
                                            <div className="form-group">
                                                <input type="password" className="form-control bg-light border-0" required placeholder="Mot de passe" value={user.password1} name="password1" onChange={handleChange} style={{ padding: '30px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row justify-content-center">
                                    {!WaitingServer &&
                                        <div className="col-sm-6">
                                            <button className="btn btn-primary btn-block" type="submit" style={{ height: '60px' }}>Se Connecter</button>
                                        </div>}
                                        {WaitingServer &&
                                        <div className="col-sm-6">
                                            <button className="btn btn-info btn-block" type="button" style={{ height: '60px' }}>Chargement ... </button>
                                        </div>}
                                    </div>
                                    <div className="form-row justify-content-center">
        
                                        <div className="col-sm-6">
                                            Vous n'avez  pas un compte ?<NavLink to="/SigneIn"  style={{ color: 'blue' }} className="dropdown-item">S'inscrire</NavLink>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
   

