import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function PlanningSoutenance(){

   
  const [data,SetData2]=useState([])

const navigator=useNavigate()
  useEffect(()=>{
    getCahierCharges()
  },[])
  
  const getCahierCharges= async()=>{
      const response= await axios.get("http://localhost:5005/getAllSoutenances")
      if(response.status ===200){
      SetData2(response.data)
      }}
  
  
  
  console.log("data  ",data[0])
  
    
    return(
        <div>
                  <div className="page-wrapper">
			
            <div className="content container-fluid">

            <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Planing Soutenances</h3>
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
      <th scope="col">Etudiant(e) 2</th>
      <th scope="col">Classe</th>
      <th scope="col">Date soutenance</th>
      <th scope="col">Heure</th>
      <th scope="col">Salle</th>
      <th scope="col">Présidant(e)</th>
      <th scope="col">Rapporteur</th>
      <th scope="col">Encadrant(e)</th>
    </tr>
  </thead>
  <tbody>
    {data.length>0 && data[0].map((items,index)=>{
      return(

        data[1].map((items2,index2)=>{
          if(items._id===items2.stageId)
          return(
           <tr>
      <th scope="row">{index+1}</th>
      <td> {items.nomEtud1} {items.prenomEtud1}</td>
      <td>{items.classeEtud1}</td>
      <td>{items.nomEtud2} {items.prenomEtud2}</td>
      <td>{items.classeEtud2}</td>
      <td>{items2.date}</td>
<td>{items2.heure}</td>
{items2.salle}
{data[2].map((element,index)=>{
    if(items2.presidantId===element._id){
        return(
            <td>{element.nom} {element.prenom}</td>
        )
    }
    
})}
{data[2].map((element,index)=>{
    if(items2.rapporteurId===element._id){
        return(
            <td>{element.nom} {element.prenom}</td>
        )
    }
    
})}
{data[2].map((element,index)=>{
    return( data[3].map((elm,i)=>{
    if((element._id===elm.ensId)&&(items.userId===elm.userId)){
        return(
            <td>{element.nom} {element.prenom}</td>   
        )
    }
 }))

    
})}
<td></td>
    </tr>
          )
        })
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