
import { StyledFormButton } from './Styles';
import { useNavigate } from "react-router-dom";
import img from '../img/about.jpg';
import img1 from '../img/feature.jpg'
import { useEffect } from 'react';

import { isConnected } from '../Helpers/User/AuthHelper';
import { useContext } from 'react';
import AuthContext from './User/AuthContexe';
import AuthContext2 from './Enseigant/AuthContexe';
import { isAuth } from '../Helpers/Ens/AuthHelper';



export default function Section2() {
    const navigator = useNavigate();

    const authContexe=useContext(AuthContext)
    const Connection=authContexe.Connect
    const CheckConnection=authContexe.SetConnect
    console.log("Etat Connexion 1",Connection)

    const authContexe2=useContext(AuthContext2)
    const Connection2=authContexe2.Connection
    const CheckConnection2=authContexe2.SetConnection
    console.log("Etat Connexion 2 ",Connection2)

    function handleClick() {
        navigator('/Stages');

    }
    function handleClick1() {
        navigator('/CV');

    }
    function handleClick2() {
       navigator('/');

    }
    useEffect(()=>{
        if(isConnected){
           // CheckConnection(true)
           // CheckConnection2(false)
          console.log("User Connectee")
       
        }else{
           // CheckConnection(false)
  
          console.log("User Hors Connexion")
      
        }

        if(isAuth){
         //   CheckConnection(false)
         //   CheckConnection2(true)
            console.log("Enseignant Connectee")
         
          }else{
         //   CheckConnection2(false)
            console.log("Enseignant Hors Connexion")
        
          }
       },[])
    
    return (
        <div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-5 mb-5 mb-lg-0" >
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src={img} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">A Propos De Notre Application :</h6>
                                <h2 className="display-4">Un pas plus prés de votre PFE ...Un pas vers votre Graduation </h2><br />

                            </div>
                            <p>Cette application de gestion des stages de fin d'étude est développée afin de faciliter le process de gestion des pfe à ISET Nabeul ,les enseignants et les étudiants de 3 éme année  utilisent ce site qui est géré par l'administration  </p>

                        </div>
                    </div>
                </div>
            </div>
            {/**  Section 2 */}


       
    <div className="container-fluid bg-image" style={{margin: "90px 0"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Comment nortre application va vous aider ?</h6>
                        <h1 className="display-4">Quelles sont nos services?</h1>
                    </div>
                    <p className="mb-4 pb-2">Dans cette application chér(e) étudiant(e) nous vous offrons les services suivants et vous pouvez aussi consulter l'état de validation de son cahier de charge et de demande d'encadrement  .</p>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-primary mr-4">
                            <i className="fa fa-2x fa-graduation-cap text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Gestion de stage</h4>
                            <p>L'étudiant remplit premiérement une formulaire de ses informations , les informations de son binome et de société .<br/> Aprés il passe à l'étape suivante : <br/>Il doit remplir les champs de cahier de charge .<br/>Et enfin il choisit son encadrant . </p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-secondary mr-4">
                            <i className="fa fa-2x fa-certificate text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Gestion CV</h4>
                            <p>L'étudiant prepare un CV au site : il remplit les champs de form CV</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="btn-icon bg-warning mr-4">
                            <i className="fa fa-2x fa-book-reader text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Integration</h4>
                            <p className="m-0"></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5" style={{height: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={img1} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  
{Connection &&  !Connection2 && <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="section-title text-center position-relative mb-5">
                        {/**
                   <h1 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Nos Services</h1>
                
                 */}<h1 className="display-4">Nos Services</h1>

                    </div>
                    <div className="owl-carousel team-carousel position-relative" style={{ padding: '0 30' }}>
                        <div className="team-item">

                            <div className="bg-light text-center p-4">

                                <div className="d-flex justify-content-center">
                                    <StyledFormButton className="btn btn-primary py-4 px-5" type="button" onClick={handleClick}>Gestion Stages</StyledFormButton>

                                </div>
                            </div>
                        </div>
                        <div className="team-item">

                            <div className="bg-light text-center p-4">

                                <div className="d-flex justify-content-center">
                                    <StyledFormButton className="btn btn-warning py-4 px-5" type="button" onClick={handleClick1}>Gestion des CVs</StyledFormButton>

                                </div>
                            </div>
                        </div>
                        <div className="team-item">

                            <div className="bg-light text-center p-4">
                                <div className="d-flex justify-content-center">
                                    <StyledFormButton className="btn btn-danger py-4 px-5" type="button" onClick={handleClick2}>Integration</StyledFormButton>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
}
           
        </div>

    )
}
