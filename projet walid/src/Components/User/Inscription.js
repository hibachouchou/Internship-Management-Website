
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import AuthContext from './AuthContexe';


export default function Inscription() {

 const authContexe=useContext(AuthContext)
const Connection=authContexe.Connect

    const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)
    const [user, SetUser] = useState({
        username: "",
        email: "",
        password: ""
    })


    const handleChange = e => {
        const { name, value } = e.target
        SetUser({
            ...user,
            [name]: value
        })

        console.log(user)
    }

    
    function InscritUser(e) {
        e.preventDefault();
        SetWaitingServer(true)
        setTimeout(()=>{
        const { username, email, password } = user
        if (username && email && password) {
  
            axios.post('http://localhost:5005/register', user)
           .then(res=>{
            console.log(res.data)
            if(!res.ok){
                SetserverErr(true)
                SetFinish(true)
                SetWaitingServer(false)
                SetData(false)
                SetErrData(false)
                SetUser({
                    username: "",
                    email: "",
                    password: ""
                })
              }
            if(res.data.errorMessage==='User already existe'){
                SetserverErr(false)
                SetWaitingServer(false)
                SetData(false)
                SetErrData(true)
                SetFinish(true)
                SetUser({
                    username: "",
                    email: "",
                    password: ""
                })
                
            }else{ 
                SetserverErr(false)
                SetWaitingServer(false)
                SetData(true)
                SetFinish(true)
                SetErrData(false)
                SetUser({
                  username: "",
                  email: "",
                  password: ""
              })
            }
           
           }
          
          
           ) .then(()=>{
            setTimeout(()=>{
             SetErrData(false)
             SetData(false)
              SetFinish(false)
              SetserverErr(false)
        },7000) } ); 
        } else {
          //  alert("Inscription echouée")
            SetData(false)
            SetFinish(false)
            SetErrData(false)
            SetserverErr(true)
        }
    },4000);
    }
    {
        /**
         if(Connection){
    return(
        <div></div>
    )
}else{}
         */
    }

    return (
        <div>
            {console.log("Data",Data)}
            {console.log("ErrData",errData)}
            {console.log("User", user)}
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
{Finish && !errData && Data && <div className="alert alert-success" role="alert">
  User Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
  User Already existe !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 

                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Form d'inscription</h1>
                        <form onSubmit={e => (InscritUser(e))}>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom Utilisateur :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Nom Utilisateur" value={user.username} required name='username' onChange={handleChange} style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    Email :
                                    <div className="form-group">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" name='email' value={user.email} onChange={handleChange} required style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">
                                <div className="col-sm-6">
                                    Mot de passe :
                                    <div className="form-group">
                                        <input type="password" className="form-control bg-light border-0" value={user.password} placeholder=" Mot de passe" name='password' onChange={handleChange} required style={{ padding: '30px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row justify-content-center">
                            {!WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-success btn-block" type="submit" style={{ height: '60px' }}>S'inscrire</button>
                                </div>}
                                {WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-primary btn-block" type="button" style={{ height: '60px' }}>Loading ... </button>
                                </div>}
                            </div>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    Avez vous un compte ?<NavLink to="/Login" className="dropdown-item">Se Connecter</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

    
