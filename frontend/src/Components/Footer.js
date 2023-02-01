import {  useContext } from "react";
import { NavLink } from 'react-router-dom';
import AuthContext2 from "./Enseigant/AuthContexe";
import AuthContext from "./User/AuthContexe";


export default function Footer(){
    const authContexe=useContext(AuthContext)
    //console.log(authContexe)
    const CheckConnection=authContexe.SetConnect
    //console.log(CheckConnection)
    const Connection=authContexe.Connect


    const authContexe2=useContext(AuthContext2)
//console.log(authContexe)
const CheckConnection2=authContexe2.SetConnection
//console.log(CheckConnection2)
const Connection2=authContexe2.Connection
 
        return (
            <div>

                <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" >
                    <div className="container mt-5 pt-5">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <NavLink to="/" className="navbar-brand">
                                    <h1 className="mt-n2 text-uppercase text-white"><i className="fa fa-book-reader mr-3"></i>ISET Nabeul</h1>
                                </NavLink>
                                <p className="m-0">Pour les étudiants de 3 éme année de departements informatiques ISETN</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">Contact</h3>
                                <p><i className="fa fa-map-marker-alt mr-2"></i>Mrezga , Nabeul</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>+216 53154992</p>
                                <p><i className="fa fa-envelope mr-2"></i>isetn-depinfo@walid.fr</p>
                                <div className="d-flex justify-content-start mt-4">
                                    <NavLink className="text-white mr-4" to="/"><i className="fab fa-2x fa-twitter"></i></NavLink>
                                    <NavLink className="text-white mr-4" to="/"><i className="fab fa-2x fa-facebook-f"></i></NavLink>
                                    <NavLink className="text-white mr-4" to="/"><i className="fab fa-2x fa-linkedin-in"></i></NavLink>
                                    <NavLink className="text-white" to="/"><i className="fab fa-2x fa-instagram"></i></NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">Nos Services</h3> 
                                 <div className="d-flex flex-column justify-content-start">
                                {Connection &&  !Connection2 &&  <> <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/Stages"><i className="fa fa-angle-right mr-2"></i>Gestion Stages</NavLink>
                                 <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/CahierCharge"><i className="fa fa-angle-right mr-2"></i>Gestion Cahier de charge</NavLink>
                                    <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/Validation"><i className="fa fa-angle-right mr-2"></i>Gestion demande d'encadrement</NavLink>
                                    <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/CV"><i className="fa fa-angle-right mr-2"></i>Gestion CV</NavLink>
                                    <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right mr-2"></i>Integration</NavLink></> }
                              
{!Connection && !Connection2 && <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/Login_Ensignant"><i className="fa fa-angle-right mr-2"></i>Pour Enseignant</NavLink>}
{Connection && Connection2 && <NavLink style={{textDecoration:'none'}} className="text-white-50 mb-2" to="/Login_Ensignant"><i className="fa fa-angle-right mr-2"></i>Pour Enseignant</NavLink>}                                

                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        )
    }
