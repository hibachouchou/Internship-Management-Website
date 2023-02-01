import axios from "axios";
import React, { useEffect, useState } from "react";



export default function ListeCVs(){

  
  const [data,SetData2]=useState([])


  useEffect(()=>{
    getCVs()
  },[])
  
  const getCVs= async()=>{
      const response= await axios.get("http://localhost:5005/getAllCVs")
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
                            <h3 className="page-title">Listes des CVs</h3>
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
      <th scope="col">Nom </th>
      <th scope="col">Prenom</th>
      <th scope="col">Parcours</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">Compétances</th>
      <th scope="col">Profile</th>
    </tr>
  </thead>
  <tbody>
    {data && data.map((items,index)=>{
      console.log(items)
      return(
          <tr key={items.nom}>
      <th scope="row">{index+1}</th>
      <td>{items.nom}</td>
      <td>{items.prenom}</td>
      <td>{items.parcours}</td>
      <td>{items.email}</td>
      <td>{items.numero}</td>
      <td>
        {items.Compétance.map((item,i)=>{
          return( <ul key={i}>
        <li>{item}</li>
        </ul>)
        })}
       </td>
       <td>{items.profil}</td>
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