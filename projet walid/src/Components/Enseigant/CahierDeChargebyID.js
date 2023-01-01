import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";




export default function CahierChargeByID() {
    const[Data,SetData]=useState([])
    const {id}=useParams()
  //  const[state,SetState]=useState(0)
const navigator=useNavigate()
  const Accepter=async (id1)=>{


    try{
    await axios.put(`http://localhost:5005/AccepterDemande/${id1}`).then(res=> {
        console.log(res.data)
        navigator("/Home")

    })
    }catch(err){
            console.log(err)
        }
        }
    
        const Refuser=async (id2)=>{
         
            try{
                await axios.put(`http://localhost:5005/RefuserDemande/${id2}`).then(res=> {
                    console.log(res.data) 
                    navigator("/Home")
                })
            }catch(err){
                    console.log(err)
                }
            }


    useEffect(()=>{
        getCahierDeChargeDetails()
        
    },[])


    const getCahierDeChargeDetails= async()=>{
        try{
        await axios.get(`http://localhost:5005/getDetailsCahierCharge/${id}`).then(res=> {
            console.log(res.data)
            SetData(res.data)
        })
    }catch(err){
        console.log(err)
    }
    }

    
    if(Data.length>0){
    return (
        <div>


            <div className="row justify-content-center bg-image mx-0 mb-5">


                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h2 className="text-center mb-4">Cahier de Charge</h2>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Titre Projet :
                                        <h5>{Data[0].titre} </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Details :
                                      {Data[0].details &&
                                      Data[0].details.map((item,index)=>{console.log(item) 
                                      return(
                                        <ul key={index}><li>{item}</li></ul>
                                      )
                                      }
                                      ) 
                                      
                                 
                                      
                                      }
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Besoins Fonctionelles  :
                                      <p>{Data[0].besoinfonctionelle}</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Technologies  :
                                        <p>{Data[0].technologies} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Langue :
                                      <h5>{Data[0].langue}</h5>
                                    </div>
                                </div>
                                </div>
    
                                <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <div><button type="button" className="btn btn-success" onClick={()=>Accepter(Data[1]._id)}>Accepter</button></div>
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                      <div> <button type="button" className="btn btn-danger" onClick={()=>Refuser(Data[1]._id)}>Refuser</button></div>
                                    </div>
                                </div>
                                </div>


                        </form></div>
                </div>
</div></div>
            

    )
}else{
    <div></div>
}}
