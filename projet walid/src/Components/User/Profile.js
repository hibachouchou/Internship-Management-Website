
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserRoute from "./AlertProtection";
import AuthContext from "./AuthContexe";




export default function ProfileEtude() {
const[Data,SetData]=useState([])
    var style = {};
    const authContexe=useContext(AuthContext)
    const Connection=authContexe.Connect
    const user1=JSON.parse(localStorage.getItem("user"))
const {id}=useParams()
const navigator=useNavigate()
useEffect(()=>{
    getUserDetails()
},[])

const getUserDetails= async()=>{
    try{
    await axios.get(`http://localhost:5005/getDetailsUser/${id}`).then(res=> {
        console.log(res.data)
        SetData(res.data)
    })
}catch(err){
    console.log(err)
}
}


const SupprimerDemande=async (id1)=>{


    try{
    await axios.delete(`http://localhost:5005/SupprimerDemande/${id1}`).then(res=> {
        console.log(res.data)
        navigator("/Validation")
    })
    }catch(err){
            console.log(err)
        }
        }

        const SupprimerDemande2=async (id1)=>{


            try{
            await axios.delete(`http://localhost:5005/SupprimerDemande2/${id1}`).then(res=> {
                console.log(res.data)
                navigator("/CahierCharge")
            })
            }catch(err){
                    console.log(err)
                }
                }

{console.log("idUser",id)}
{
   console.log("data :",Data)
}


    return (
        <div>
            <div className="row justify-content-center bg-image mx-0 mb-5">
    
    
                <div className="col-lg-6 py-5">
                    <h1 className="text-center mb-4">Espace Etudiant {user1.username}</h1>
                   
                          <div className="bg-white p-5 my-5">
                         <h2 className="text-center mb-4">Informations Etudiant 1</h2> {Data.length>0 && Data[1]  && 
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <h5>{Data[1].nomEtud1}</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <h5>{Data[1].prenomEtud1}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <h5>{Data[1].emailEtud1}</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Telephone :
                                        <h5>{Data[1].telEtud1}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Cin :
                                        <h5>{Data[1].cinEtud1}</h5>
                                    </div>
                                </div>
    
                            </div>
                            <div className="form-row">
    
                            
    
                            </div>
    
                            <div className="form-row">
    
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Parcours :
    
                                        <h5>{Data[1].parcoursEtud1}</h5>
    
                                    </div>
                                </div>
    
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Classe :
                                        <h5>{Data[1].classeEtud1}</h5>
    
                                    </div>
                                </div>
    
                            </div>
                      
    
    
    
                        </form>
              } 
 </div>
                    </div>
                       
    { Data.length>0 &&  Data[1].typeStage===2 ?    <div className="col-lg-6 py-5" style={style}>
                    <div className="bg-white p-5 my-5">
                        <h2 className="text-center mb-4">Informations Etudiant 2</h2>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <h5>{Data[1].nomEtud2}</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <h5>{Data[1].prenomEtud2}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <h5>{Data[1].emailEtud2}</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Telephone :
                                        <h5>{Data[1].telEtud2}</h5>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="form-row">
    
                            <div className="col-sm-6">
                                    <div className="form-group">
                                        Cin :
    
                                        <h5>{Data[1].cinEtud2}</h5>
    
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="form-row">
    
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Parcours :
    
                                        <h5>{Data[1].parcoursEtud2}</h5>
    
                                    </div>
                                </div>
    
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Classe :
                                        <h5>{Data[1].classeEtud2}</h5>
    
                                    </div>
                                </div>
    
                            </div>
                      
    
    
    
                        </form>
    
                    </div>
                </div> :<div></div>
           }
            
        </div>
      
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h3 className="text-center mb-4">Etat de cahier de charge</h3>
    
      <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Etat de cahier de charge</th>
    
    
                                </tr>
                            </thead>  { Data.length>0 && Data[2] &&
                            <tbody>
                                <tr>
     {Data[2].etat===1 ?
            <td><button type="button" className="btn btn-success" >Validé</button></td>
        : Data[2].etat===-1 ?
            <><td><button type="button" className="btn btn-danger" >Non Validé</button></td>
                 Supprimer l'ancien demande et Envoyer un nouveau demande :
                        <tr><td><button type="button" class="btn btn-secondary" onClick={()=>SupprimerDemande2(Data[2]._id)}>Supprimer le demande et Ressayer de nouveau  </button></td></tr>
            <tr>
         </tr>
            </>
       :
            <td><button type="button" className="btn btn-primary">En cours de traitement</button></td>
        }
    
                                  
    
                                </tr>
    
                            </tbody>
                      }   </table>
                        
    
    
    
                    </div>    <div className="bg-white p-5 my-5">
                        <h3 className="text-center mb-4">Résultat de traitement des demandes d'encadrement</h3>
    
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Encadrant(e)</th>
                                    <th scope="col">Demande d'encadrement</th>
    
                                </tr>
                            </thead> {Data.length>0 && Data[4] &&
                            <tbody>
                                


    
                                  <tr><td>{Data[4].nom} {Data[4].prenom}</td>
                                    {Data[3].etat===2 ?
         <td><button type="button" className="btn btn-success" >Accepté</button></td>
            :
       Data[3].etat===-1 ?
       <>
            <td><button type="button" className="btn btn-danger" >Refusé</button></td>
           
            Supprimer l'ancien demande et Envoyer un nouveau demande :
            <tr><td><button type="button" class="btn btn-secondary" onClick={()=>SupprimerDemande(Data[3]._id)}>Supprimer le demande et Ressayer de nouveau </button></td></tr>
            <tr>
           </tr></>
      : Data[3].etat===1 ?
          <td><button type="button" className="btn btn-warning" >En cours de traitement</button></td>
      :
           <td><button type="button" className="btn btn-primary" >En cours de traitement</button></td>
    }
                                  
    
                               
                                  </tr> 
                            </tbody>}
                        </table>
    
                    </div></div></div> 
        </div>
       )

}
