import axios from "axios";
import React , {  useEffect, useState } from "react";

export default function Profile(){
    const [data,SetData2]=useState([])
    useEffect(()=>{
      getEns()
  },[])
  
  const getEns= async()=>{
      const response= await axios.get("http://localhost:5005/getAdminProfile")
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
                            <h3 className="page-title">Profile</h3>
                        </div>
                    </div>
                </div>
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                        <li className="breadcrumb-item active">Username :</li> <br/>
                       {data && <h5>{data.username}</h5>} 
                                <li className="breadcrumb-item active">Email:</li><br/>
                        {data && <h5>{data.email}</h5>} <br/>
                        <button type="button" class="btn btn-primary">Modifier informations</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}