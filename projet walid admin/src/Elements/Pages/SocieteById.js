import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SocieteById(){
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
                            <h3 className="page-title">Details Societe:</h3>
                       
                                <li className="breadcrumb-item active">Nom Societe :</li><br/>
                                <h5>{data.nomSociete}</h5><br/>
                                <li className="breadcrumb-item active">Raison sociale :</li><br/>
                                <h5>{data.raisonsociale}</h5><br/>
                                <li className="breadcrumb-item active">Adresse Societe :</li><br/>
                                <h5> {data.adresseSociete}</h5><br/>
                                <li className="breadcrumb-item active">Gouvernat :</li><br/>
                                <h5>{data.gouvernat}</h5><br/>
                                <li className="breadcrumb-item active">Ville :</li><br/>
                                <h5>{data.ville}</h5><br/>
                                <li className="breadcrumb-item active">Code postale :</li><br/>
                                <h5>{data.codepostale}</h5><br/>
                                <li className="breadcrumb-item active">Nom responsable :</li><br/>
                                <h5> {data.responsable}</h5><br/>
                                <li className="breadcrumb-item active">Poste de responsable:</li><br/>
                                <h5> {data.posteresponsable} </h5><br/>
                                <li className="breadcrumb-item active">Email responsable:</li><br/>
                                <h5>{data.emailresponsable}</h5><br/>
                                <li className="breadcrumb-item active">Numéro de contact responsable :</li><br/>
                                <h5>{data.telephoneresponsable}</h5>
                         
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}