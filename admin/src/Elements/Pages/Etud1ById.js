import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Etudiant1(){

    const [data,SetData2]=useState([])
    const {id}=useParams()
    useEffect(()=>{
      getCahierCharges()
    },[])
    
    const getCahierCharges= async()=>{
        const response= await axios.get(`http://localhost:5005/getDemandeStageById/${id}`)
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
                            <h3 className="page-title">Details Etudiant1 :</h3>
                        
                                <li className="breadcrumb-item active">Nom Complet :</li><br/>
                                <h5>{data.nomEtud1} {data.prenomEtud1}</h5><br/>
                                <li className="breadcrumb-item active">Classe :</li><br/>
                                <h5>{data.classeEtud1}</h5><br/>
                                <li className="breadcrumb-item active">Email :</li><br/>
                                <h5>{data.emailEtud1}</h5><br/>
                                <li className="breadcrumb-item active">Telephone :</li><br/>
                                <h5>{data.telEtud1}</h5><br/>
                                <li className="breadcrumb-item active">Cin :</li><br/>
                                <h5>{data.cinEtud1}</h5>
                          
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}