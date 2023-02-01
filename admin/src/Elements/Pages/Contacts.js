import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Contacts(){

  
  const [data,SetData2]=useState([])


  useEffect(()=>{
    getAllContacts()
  },[])
  
  const getAllContacts= async()=>{
      const response= await axios.get("http://localhost:5005/getAllContacts")
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
                            <h3 className="page-title">Contacts</h3>
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
      <th scope="col">Email</th>
      <th scope="col">Objet</th>
      <th scope="col">Message</th>
 
    </tr>
  </thead>
  <tbody>
    {data && data.map((items,index)=>{
      console.log(items)
      return(
          <tr key={items.nom}>
      <th scope="row">{index+1}</th>
      <td>{items.name}</td>
      <td>{items.email}</td>
      <td>{items.objet}</td>
      <td>{items.msg}</td>
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