
import axios from "axios";
import React , {  useEffect, useState } from "react";

export default function ListeProfs(){
  const [data,SetData2]=useState([])
  useEffect(()=>{
    getEns()
},[])

const getEns= async()=>{
    const response= await axios.get("http://localhost:5005/getAllEns")
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
                            <h3 className="page-title">Listes des enseignants </h3>
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
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">Action</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {data.length>0 && data.map((items,index)=>{
     // console.log(items)
     return(
          <tr key={items._id}>
      <th scope="row">{index+1}</th>
      <td>{items.nom}</td>
      <td>{items.prenom}</td>
      <td>{items.email}</td>
      <td>{items.tel}</td>
      <td><button type="button" class="btn btn-primary">Modifier</button></td>
      <td><button type="button" class="btn btn-danger">Supprimer</button></td>
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