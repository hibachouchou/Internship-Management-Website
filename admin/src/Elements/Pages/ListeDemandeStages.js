
import axios from "axios";
import React , {  useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ListeDemandesStage(){
  const navigator=useNavigate()
  const [data,SetData2]=useState([])
  useEffect(()=>{
    getDeamndeStages()
},[])

const getDeamndeStages= async()=>{
    const response= await axios.get("http://localhost:5005/getAllStages")
    if(response.status ===200){
    SetData2(response.data)
    }}



console.log("data  ",data)
    return(
        <div>
                  <div className="page-wrapper">
			
            <div className="content container-fluid">

            <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Listes des demandes des stages</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                               <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Etudiant(e) 1</th>
      <th scope="col">Classe</th>
      <th scope="col">Details</th>
      <th scope="col"> Etudiant(e) 2</th>
      <th scope="col">Classe</th>
      <th scope="col">Details</th>
      <th scope="col">Nom Societe</th>
      <th scope="col">Details</th>
      <th scope="col">Gérer soutenance</th>
    </tr>
  </thead>
  <tbody>
    {data.length>0 && data.map((items,index)=>{
      return(
            <tr key={items._id}>
      <th scope="row">{index+1}</th>
      <td>{items.nomEtud1} {items.prenomEtud1}</td>
      <td>{items.classeEtud1}</td>
      <td><button type="button" class="btn btn-info" onClick={()=>{navigator(`/DetailsEtud1/${items._id}`)}}>Voir Details</button></td>
      <td>{items.nomEtud2} {items.prenomEtud2}</td>
      <td>{items.classeEtud2} </td>
      <td><button type="button" class="btn btn-info" onClick={()=>{navigator(`/DetailsEtud2/${items._id}`)}} >Voir Details</button></td>
      <td>{items.nomSociete}</td>
      <td><button type="button" class="btn btn-info"  onClick={()=>{navigator(`/DetailsSociete/${items._id}`)}}>Voir Details</button></td>
      <td><button type="button" class="btn btn-secondary" onClick={()=>{navigator(`/GestionSoutenance/${items._id}`)}}>Gérer Soutenace</button></td>
    </tr>
      )
    })}

  </tbody>
</table>        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}