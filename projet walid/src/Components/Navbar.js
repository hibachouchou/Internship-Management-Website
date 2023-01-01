//import { Component } from "react";
import { NavLink, Route ,Routes} from 'react-router-dom';
import Home from './Home';
import DemandeStage from './User/DemandeStage'
import Validation1 from "./User/DemandeEncadrement";
import CahierDeCharge from "./User/CahierDeCharge";
import GestionCV from "./User/GestionCv";
import Login from "./User/Login";
import Inscription from "./User/Inscription";
import { useNavigate } from "react-router-dom";
import Login2 from "./Enseigant/LoginEns";
import Inscription2 from "./Enseigant/InscriptionEns";
import ProfileEtude from './User/Profile';
import Contact from './Contact';
import ProfileEnseign from './Enseigant/ProfileEns';
import { useEffect } from 'react';

import { isConnected, logout } from '../Helpers/User/AuthHelper';
import { useContext } from 'react';
import AuthContext from './User/AuthContexe';
import UserRoute from './User/AlertProtection';
import AuthContext2 from './Enseigant/AuthContexe';
import { isAuth, logout2 } from '../Helpers/Ens/AuthHelper';
import CahierChargeByID from './Enseigant/CahierDeChargebyID';



export default function Navbar() {

 
 const user1=JSON.parse(localStorage.getItem("user"))
 const ens=JSON.parse(localStorage.getItem("ens"))
const authContexe=useContext(AuthContext)
//console.log(authContexe)
const CheckConnection=authContexe.SetConnect
//console.log(CheckConnection)
const Connection=authContexe.Connect
console.log("Etat Connexion user :",Connection)


const authContexe2=useContext(AuthContext2)
//console.log(authContexe)
const CheckConnection2=authContexe2.SetConnection
//console.log(CheckConnection2)
const Connection2=authContexe2.Connection
console.log("Etat Connexion enseignant :",Connection2)




    const navigator = useNavigate();
    function handleClick() {
        navigator('/Login');

    }
   



 useEffect(()=>{
  if(isConnected){
  // CheckConnection(true)
  //CheckConnection2(false)
    console.log("User Connectee")
 
  }else{
 //   CheckConnection(false)
    console.log("User Hors Connexion")

  }


  if(isAuth){
  // CheckConnection(false)
  //  CheckConnection2(true)
    console.log("Enseignant Connectee")
 
  }else{
   // CheckConnection2(false)
    console.log("Enseignant Hors Connexion")

  }
  }
 ,[])



    function handleClick1() {
        navigator('/SigneIn');
    
        

    }
  async  function Logout(){
 
console.log("User Hors Connection")
CheckConnection(false)
CheckConnection2(false)
logout(()=>{
    navigator("/Home")
})

    }


    async  function Logout2(){
 
        console.log("Enseignant Hors Connection")
        CheckConnection2(false)
        CheckConnection(false)
        logout2(()=>{
            navigator("/Home")
        })
      
            }
    return (
        <div>

<div className="container-fluid p-0">
{Connection  && !Connection2 ?
  <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <NavLink to="/" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>ISET Nabeul</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                <NavLink to="/Home" className="nav-item nav-link active">Accueil</NavLink>
                        
                           <div className="nav-item dropdown">
                                <NavLink to="/Home " className="nav-link dropdown-toggle" data-toggle="dropdown">Services</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/Stages" className="dropdown-item">Gestion Stages</NavLink>
                                    <NavLink to="/CV" className="dropdown-item">Gestion CV</NavLink>
                                    <NavLink to="/" className="dropdown-item">Integration</NavLink>

                                </div>
                            </div> 
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                           <NavLink to={`/ProfileEtud/${user1._id}`} className="nav-item nav-link">Profile</NavLink>
                             </div>
                         
                    
                          <button className="btn btn-danger py-2 px-4 d-none d-lg-block" onClick={Logout}>Déconnexion</button> 
                        
                          
                       
                    </div>

                </nav> : !Connection && Connection2 ?
                
              
<nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
    <NavLink to="/" className="navbar-brand ml-lg-3">
        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>ISET Nabeul</h1>
    </NavLink>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
            <NavLink to="/Home" className="nav-item nav-link active">Accueil</NavLink>
        
            
           
             <NavLink to={`/ProfileEns/${ens._id}`} className="nav-item nav-link">Profile</NavLink>
                             </div>
                       
                    
                          <button className="btn btn-danger py-2 px-4 d-none d-lg-block" onClick={Logout2}>Déconnexion</button> 
       
 
        
          
          
       
    </div>

</nav>
:
<nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
<NavLink to="/" className="navbar-brand ml-lg-3">
    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>ISET Nabeul</h1>
</NavLink>
<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
    <div className="navbar-nav mx-auto py-0">
        <NavLink to="/Home" className="nav-item nav-link active">Accueil</NavLink>
    <NavLink to="/SigneIn_Ensignant" className="nav-item nav-link">Pour enseignant</NavLink>
        
       
        <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
      
         </div>
   
      
    <button className="btn btn-primary py-2 px-4 d-none d-lg-block" onClick={handleClick} style={{ margin: "5px" }}>Connexion</button>
  

      
      <button className="btn btn-secondary py-2 px-4 d-none d-lg-block" onClick={handleClick1}>Créer un compte</button>
    
      
      
   
</div>

</nav>       

                }
        
            </div>
            <Routes>
                <Route exact path='/Home'  element={<Home />} />
                <Route path='/Stages' exact element={<DemandeStage />} />
                <Route path='/Validation' exact element={<Validation1 />} />
                <Route path='/CahierCharge' exact element={<CahierDeCharge />} />
                <Route exact path='/CV' element={<GestionCV />} />
                <Route exact path='/Login' element={<Login />} />
                <Route exact path='/SigneIn' element={<Inscription />} />
                <Route exact path='/Login_Ensignant' element={<Login2 />} />
                <Route exact path='/SigneIn_Ensignant' element={<Inscription2 />} />
                <Route exact path='/ProfileEtud/:id' element={<ProfileEtude />} />
                <Route exact path='/Contact' element={<Contact/>} />
                <Route exact path='/ProfileEns/:id' element={<ProfileEnseign />} />
                <Route path='/*' element={<p>404 : Page not found</p>} />
                <Route path='/userNotConnected' element={<UserRoute/>} />
                <Route path='/CahierDeChargeDetails/:id' element={<CahierChargeByID/>} />
            </Routes>


        </div>
    )
}

