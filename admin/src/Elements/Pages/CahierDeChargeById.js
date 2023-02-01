import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function CahiersDeChargeById(){
  const navigator=useNavigate()
  const [data,SetData2]=useState([])
  const {id}=useParams()

  const Accepter=async (id1)=>{
try{
    await axios.put(`http://localhost:5005/ValiderCahierCharge/${id1}`).then(res=> {
        console.log(res.data)
        navigator("/CahiersDeCharge")

    })
    }catch(err){
            console.log(err)
        }
        }
    
        const Refuser=async (id2)=>{
         
            try{
                await axios.put(`http://localhost:5005/RefuserCahierCharge/${id2}`).then(res=> {
                    console.log(res.data) 
                    navigator("/CahiersDeCharge")
                })
            }catch(err){
                    console.log(err)
                }
            }
  useEffect(()=>{
    getCahierCharges()
  },[])
  
  const getCahierCharges= async()=>{
      const response= await axios.get(`http://localhost:5005/getCahierChargeById/${id}`)
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
                            <h3 className="page-title">Details Cahier De charge :</h3>
                         
                            <li className="breadcrumb-item active">Titre Projet :</li><br/>
                                <h5>{data.titre}</h5><br/>
                                <li className="breadcrumb-item active">Details :</li><br/>
                              <h6>{data.details}</h6>
                             <br/>
                                <li className="breadcrumb-item active">Besoins fonctionelles :</li><br/>
                              <p>{data.besoinfonctionelle} </p><br/>
                                <li className="breadcrumb-item active">Technologies :</li><br/>
                                <p>{data.technologies} </p><br/>
                                <li className="breadcrumb-item active">Langue :</li><br/>
                                <h5>{data.langue}</h5>
                      <button type="button" class="btn btn-success" onClick={()=>Accepter(data._id)}>Valider</button>
                      <button  type="button" class="btn btn-danger"  onClick={()=>Refuser(data._id)}>Refuser</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}