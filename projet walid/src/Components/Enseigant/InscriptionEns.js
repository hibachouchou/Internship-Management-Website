//import { Component } from "react";
import { NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from "axios";
import AuthContext2 from './AuthContexe';

export default function Inscription2() {

    const authContexe=useContext(AuthContext2)
    const Connection=authContexe.Connection
    
        const[WaitingServer,SetWaitingServer]=useState(false)
        const[Finish,SetFinish]=useState(false)
        const[Data,SetData]=useState(false)
        const[errData,SetErrData]=useState(false)
        const [serverErr,SetserverErr]=useState(null)
    //
    const [enseignant, SetEnseigant] = useState({
        nom: "",
        prenom: "",
        tel: "",
        email: "",
        password: ""
    })
 
    const handleChange = e => {
        const { name, value } = e.target
        SetEnseigant({
            ...enseignant,
            [name]: value
        })


    }
 

    function InscritEnseignant(e) {
        e.preventDefault();
        SetWaitingServer(true)
        setTimeout(()=>{
            const { nom, prenom, tel, email, password } = enseignant
            if (nom && prenom && tel && email && password) {
  
            axios.post('http://localhost:5005/registerEnseigant', enseignant)
           .then(res=>{
            console.log(res.data)
            if(!res.ok){
                SetserverErr(true)
                SetFinish(true)
                SetWaitingServer(false)
                SetData(false)
                SetErrData(false)
                SetEnseigant({
                    nom: "",
                    prenom: "",
                    tel: "",
                    email: "",
                    password: ""
                })
              }
            if(res.data.errorMessage==='Enseigant already existe'){
                SetserverErr(false)
                SetWaitingServer(false)
                SetData(false)
                SetErrData(true)
                SetFinish(true)
                SetEnseigant({
                    nom: "",
                    prenom: "",
                    tel: "",
                    email: "",
                    password: ""
                })
                
            }else{ 
                SetserverErr(false)
                SetWaitingServer(false)
                SetData(true)
                SetFinish(true)
                SetErrData(false)
                SetEnseigant({
                    nom: "",
                    prenom: "",
                    tel: "",
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

    return (
        <div>
              {console.log("Data",Data)}
            {console.log("ErrData",errData)}
            {console.log("Enseignant", enseignant)}
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                {Finish && !errData && Data && <div className="alert alert-success" role="alert">
  Enseignant Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
Enseignant Already existe !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Form d'inscription enseignant</h1>
                        <form onSubmit={e => (InscritEnseignant(e))}>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    Nom :
                                    <div className="form-group">
                                        <input type="text" required className="form-control bg-light border-0" value={enseignant.nom} placeholder="Nom" name="nom" onChange={handleChange} style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">
                                <div className="col-sm-6">
                                    Prenom :
                                    <div className="form-group">
                                        <input type="text" required className="form-control bg-light border-0" value={enseignant.prenom} onChange={handleChange} placeholder="Prenom" name="prenom" style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">
                                <div className="col-sm-6">
                                    Telephone :
                                    <div className="form-group">
                                        <input type="tel" required className="form-control bg-light border-0" value={enseignant.tel} placeholder="Telephone" onChange={handleChange} name="tel" style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">

                                <div className="col-sm-6">
                                    Email :
                                    <div className="form-group">
                                        <input type="email" required className="form-control bg-light border-0" value={enseignant.email} placeholder="Email" name="email" onChange={handleChange} style={{ padding: '30px' }} />
                                    </div>
                                </div></div>
                            <div className="form-row justify-content-center">
                                <div className="col-sm-6">
                                    Mot de passe :
                                    <div className="form-group">
                                        <input type="password" required className="form-control bg-light border-0" value={enseignant.password} placeholder="Mot de passe" onChange={handleChange} name="password" style={{ padding: '30px' }} />
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
                                    Avez vous un compte ?<NavLink to="/Login_Ensignant" className="dropdown-item">Se Connecter</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
