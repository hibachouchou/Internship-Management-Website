
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListeDemandesEncadrements(){
  //const[state,SetState]=useState()
  const [data,SetData2]=useState([])
  const Accepter=async (id1)=>{


    try{
    await axios.put(`http://localhost:5005/AccepterDemande2/${id1}`).then(res=> {
        console.log(res.data)
        window.location.reload();
     // SetState(2)
    })
    }catch(err){
            console.log(err)
        }
        }
    
        const Refuser=async (id2)=>{
         
            try{
                await axios.put(`http://localhost:5005/RefuserDemande2/${id2}`).then(res=> {
                    console.log(res.data)
                    window.location.reload();
                 // SetState(-1)
                })
            }catch(err){
                    console.log(err)
                }
        }

  useEffect(()=>{
    getDemandeEncadrements()
  },[])
  
  const getDemandeEncadrements= async()=>{
      const response= await axios.get("http://localhost:5005/getAllDemandeEncadrements")
      if(response.status ===200){
      SetData2(response.data)
      }}
  
  
  
  console.log("data  ",data)
  console.log("data1  ",data[0])
  console.log("data2  ",data[1])
    return(
        <div>
                  <div className="page-wrapper">
			
            <div className="content container-fluid">

            <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Listes des demandes d'encadrements</h3>
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
      <th scope="col"></th>
      <th scope="col">Etudiant(e) 1</th>
      <th scope="col">Classe</th>
      <th scope="col">Etudiant(e) 2</th>
      <th scope="col">Classe</th>
      <th scope="col">Enseignant(e)</th>
      <th scope="col">Etat de demande</th>
      <th scope="col">Action</th>
      <th scope="col"></th>
    </tr> 
      </thead>
  <tbody>
    {data.length>0 && data[0].map((items,index)=>{
     // console.log(items)
return(
data[1].map((items2,index2)=>{
  console.log(items2._id)

  if(items.userId===items2.userId){
    return(
     <tr key={items._id}>
      <th scope="row">{index+1}</th>
      <td>{items.nomEtud1} {items.prenomEtud1}</td>
      <td>{items.classeEtud1}</td>
      <td>{items.nomEtud2} {items.prenomEtud2}</td>
      <td>{items.classeEtud2}</td>
      {data[2].map(elem=>{
        if(elem._id===items2.ensId){
          return(  <td>{elem.nom} {elem.prenom}</td>)
        }
      })}
    
      {items2.etat===1 ? <td><button type="button" class="btn btn-warning">En cours de traitement</button></td> :items2.etat===-1  ?<td><button type="button" class="btn btn-danger">Réfusé</button></td> : items2.etat===2   ? <td><button type="button" class="btn btn-success">Accepté</button></td>:<td><button type="button" class="btn btn-primary">En cours de traitement</button></td>}

      <td><button type="button" class="btn btn-success" onClick={()=>Accepter(items2._id)}>Accepter</button></td>
      <td><button type="button" class="btn btn-danger" onClick={()=>Refuser(items2._id)}>Refuser</button></td>
    </tr>
    )
  }
}))

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