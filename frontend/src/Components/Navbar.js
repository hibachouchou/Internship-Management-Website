import { NavLink, Route ,Routes} from 'react-router-dom';
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
import { logout } from '../Helpers/User/AuthHelper';
import UserRoute from './User/AlertProtection';
import { logout2 } from '../Helpers/Ens/AuthHelper';
import CahierChargeByID from './Enseigant/CahierDeChargebyID';
import Home from './Home';




export default function Navbar() {

 
 const user1=JSON.parse(localStorage.getItem("user"))
 const ens=JSON.parse(localStorage.getItem("ens"))
 const connection1=localStorage.getItem("connection1")
 const connection2=localStorage.getItem("connection2")









    const navigator = useNavigate();
    function handleClick() {
        navigator('/Login');
    }
   



 useEffect(()=>{
  if(connection1==="true"){
    console.log("User Connectee")
 
  }else{
    console.log("User Hors Connexion")

  }


  if(connection2==="true"){
    console.log("Enseignant Connectee")
 
  }else{
    console.log("Enseignant Hors Connexion")

  }
  }
 ,[])



    function handleClick1() {
        navigator('/SigneIn');
    
        

    }
    async function Logout() {
        console.log("User Hors Connection");
      
        // Clear local storage
        localStorage.clear();
      
        // Clear cookies
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        localStorage.setItem('connection1', "false");
        localStorage.setItem('connection2', "false");
        logout2(() => {
          navigator("/");
        });
      }
      


    async  function Logout2(){
 
        console.log("Enseignant Hors Connection")
        // Clear local storage
        localStorage.clear();
      
        // Clear cookies
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        localStorage.setItem('connection1', "false");
        localStorage.setItem('connection2', "false");
        logout(() => {
          navigator("/Home");
        });
      
            }
    return (
        <div>

<div className="container-fluid p-0">
{connection1==="true"  && connection2==="false" && user1 && !ens ?
  <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <NavLink to="/Home" className="navbar-brand ml-lg-3">
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

                </nav> : connection1==="false" && connection2==="true" && ens && !user1 ?
                
              
<nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
    <NavLink to="/Home" className="navbar-brand ml-lg-3">
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
<NavLink to="Home/" className="navbar-brand ml-lg-3">
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
                <Route exact path='/Home'  element={<Home/>}/>
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
                <Route path='/' element={<p></p>} />
                <Route path='/userNotConnected' element={<UserRoute/>} />
                <Route path='/CahierDeChargeDetails/:id' element={<CahierChargeByID/>} />
            </Routes>


        </div>
    )
}

