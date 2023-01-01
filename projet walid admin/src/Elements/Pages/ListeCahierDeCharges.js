import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ListeChaierDeCharges(){

   
  const [data,SetData2]=useState([])

const navigator=useNavigate()
  useEffect(()=>{
    getCahierCharges()
  },[])
  
  const getCahierCharges= async()=>{
      const response= await axios.get("http://localhost:5005/getAllCahiersDecahrges")
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
                            <h3 className="page-title">Listes de Cahiers de charges</h3>
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
      <th scope="col">Cahier de charge</th>
      <th scope="col">Etat cahier de charge</th>
    </tr>
  </thead>
  <tbody>
    {data.length>0 && data[0].map((items,index)=>{
      return(

        data[1].map((items2,index2)=>{
          if(items.userId===items2.userId)
          return(
           <tr>
      <th scope="row">{index+1}</th>
      <td> {items.nomEtud1} {items.prenomEtud1}</td>
      <td>{items.classeEtud1}</td>
      <td>{items.nomEtud2} {items.prenomEtud2}</td>
      <td>{items.classeEtud2}</td>
      <td><button type="button" class="btn btn-info" onClick={()=>{navigator(`/DetailsCahierCharge/${items2._id}`)}}>Voir Details</button></td>
      {items2.etat===1 ? <td><button type="button" class="btn btn-success">Validé</button></td> :items2.etat===-1 ? <td><button type="button" class="btn btn-danger">Refusé</button></td>:<td><button type="button" class="btn btn-primary">En cours de traitement</button></td>}
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