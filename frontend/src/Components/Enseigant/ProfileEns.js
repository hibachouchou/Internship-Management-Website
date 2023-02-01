import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";




export default function ProfileEnseign() {
    const[Data,SetData]=useState([])
    const {id}=useParams()

const navigator=useNavigate()
    useEffect(()=>{
        getUserDetails()
        
    },[])
    
const Voir=(id3)=>{
    navigator(`/CahierDeChargeDetails/${id3}`)
}

    const Accepter=async (id1)=>{


try{
await axios.put(`http://localhost:5005/AccepterDemande/${id1}`).then(res=> {
    console.log(res.data)
    window.location.reload();
})
}catch(err){
        console.log(err)
    }
    }

    const Refuser=async (id2)=>{
     
        try{
            await axios.put(`http://localhost:5005/RefuserDemande/${id2}`).then(res=> {
                console.log(res.data)
                window.location.reload();
            })
        }catch(err){
                console.log(err)
            }
    }
    const getUserDetails= async()=>{
        try{
        await axios.get(`http://localhost:5005/getDetailsEns/${id}`).then(res=> {
            console.log(res.data)
            SetData(res.data)
        })
    }catch(err){
        console.log(err)
    }
    }
    {//console.log("idEns",id)
    }
    {
      // console.log("data :",Data)
    }
    if(Data.length>0){
    return (
        <div>


            <div className="row justify-content-center bg-image mx-0 mb-5">


                <div className="col-lg-6 py-5">
                    <h1 className="text-center mb-4">Espace Enseignant {Data[0].nom}  {Data[0].prenom} </h1>
                    <div className="bg-white p-5 my-5">
                        <h2 className="text-center mb-4">Informations Enseignant </h2>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <h5>{Data[0].nom} </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <h5>{Data[0].prenom} </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <h5>{Data[0].email} </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Telephone :
                                        <h5>{Data[0].tel} </h5>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="form-row">

<div className="col-sm-6">
    <button className="btn btn-primary btn-block" type="button"  style={{ height: '60px' }}>Modifier</button>
</div>
</div>




                        </form></div>
                </div>

                <div className="row justify-content-center bg-image mx-0 mb-5">
                    <div className="col-lg-6 py-5">
                        <div className="bg-white p-5 my-5">
                            <h3 className="text-center mb-4">Listes  des demandes d'encadrement</h3>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Demande de stage</th>
                                        <th scope="col">Etudiant 1 (e)</th>
                                        <th scope="col">Classe</th>
                                        <th scope="col">Etudiant 2 (e)</th>
                                        <th scope="col">Classe</th>
                                        <th scope="col">Cahier De Charge</th>
                                        <th scope="col">Valider le demmande</th>
                                        <th scope="col"></th>
                            
                                    </tr>
                                </thead>
                                <tbody>
                                    {Data[2] && Data[1] && Data[2].map((items,index)=>{

                                      
                                        return(
                        items.map((item)=>{
                           // console.log(item) 
                          return(  
                           Data[1].map(elem=>{
              
                if((elem.userId===item.userId)&&(elem.etat===0) ){
 // console.log(elem.userId,"= =",elem.userId)

                  return(
                                        <tr key={item._id}>
                                        <td>Demande{index+1}</td>
                                       <td>{item.nomEtud1}</td>
                                       <td>{item.classeEtud1}</td>
                                       <td>{item.nomEtud2}</td>
                                       <td>{item.classeEtud2}</td>
                                       <td><button type="button" className="btn btn-info" onClick={()=>Voir(elem.userId)} >Voir</button></td>
                                        <td><button type="button" className="btn btn-success" onClick={()=>Accepter(elem._id)}>Accepter</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={()=>Refuser(elem._id)}>Refuser</button></td>
                                    </tr>    
                                        ) 
                }
              
                           
                              
                        }
                        
                           ))
                                      
                    })     

                                     ) })
                                          
                                     }     
                                </tbody>
                            </table>

                            
                        </div></div></div>         
{/**
 
  <div className="row justify-content-center bg-image mx-0 mb-5">
                    <div className="col-lg-6 py-5">
                        <div className="bg-white p-5 my-5">
                            <h3 className="text-center mb-4">Listes  des demandes d'encadrement</h3>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Etudiant(e) 1</th>
                                        <th scope="col">Classe</th>
                                        <th scope="col">Etudiant(e) 2</th>
                                        <th scope="col">Classe</th>
                                        <th scope="col">Cahier de charge</th>
                                        <th scope="col">Valider le demmande</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>{Data[0].nomEtud1} </td>
                                        <td>{Data[0].classeEtud1}</td>
                                        <td>{Data[0].nomEtud2}</td>
                                        <td>{Data[0].classeEtud2}</td>
                                        <td><button type="button" className="btn btn-info">Voir</button></td>
                                        <td><button type="button" className="btn btn-success">Accepter</button></td>
                                        <td><button type="button" className="btn btn-danger">Refuser</button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div></div></div>
 
 */}
              


               
            </div>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
            
            </div>
            

    )
}else{
    <div></div>
}}
