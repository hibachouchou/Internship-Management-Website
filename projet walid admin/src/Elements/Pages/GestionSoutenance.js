import axios from "axios";
import React , {  useEffect, useState } from "react";
import { useParams } from "react-router";

export default function GestionSoutenance(){

  const {id}=useParams()
  const [data,SetData2]=useState([])
  useEffect(()=>{
    getEns()
},[])

const getEns= async()=>{
    const response= await axios.get("http://localhost:5005/getAllEns")
    if(response.status ===200){
    SetData2(response.data)
    }}

    const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)

const [soutenance,SetSoutenance]=useState({
  idStage:id,
  Salle:"",
  Heure:"",
  Date:"",
  Presidant:"",
  Rapporteur:""
})

const handleChange = e => {
  const { name, value } = e.target
  SetSoutenance({
      ...soutenance,
      [name]: value

  })

}
function handleSubmit(e) {
  e.preventDefault();

  setTimeout(()=>{
      const {idStage,Salle,Heure,Date,Presidant,Rapporteur}=soutenance
        SetWaitingServer(true)
        setTimeout(()=>{
 if ( idStage && Salle && Heure && Date && Presidant && Rapporteur) {
axios.post('http://localhost:5005/soutenance', soutenance)
.then(res=>{
  console.log(res.data)
  if(!res.ok){
      SetserverErr(true)
      SetFinish(true)
      SetWaitingServer(false)
      SetData(false)
      SetErrData(false)
      SetSoutenance({
        idStage:id,
        Salle:"",
        Heure:"",
        Date:"",
        Presidant:"",
        Rapporteur:""
      })
    }
  if(res.data._message==="Soutenance validation failed"){
      SetserverErr(false)
      SetWaitingServer(false)
      SetData(false)
      SetErrData(true)
      SetFinish(true)
      setTimeout(()=>{
          SetErrData(false)
          SetData(false)
           SetFinish(false)
           SetserverErr(false)
      
      },7000)
      
      
  }else{ 
      SetserverErr(false)
      SetWaitingServer(false)
      SetData(true)
      SetFinish(true)
      SetErrData(false)
      SetSoutenance({
        idStage:id,
        Salle:"",
        Heure:"",
        Date:"",
        Presidant:"",
        Rapporteur:""
    }) 
      setTimeout(()=>{
       SetErrData(false)
       SetData(false)
        SetFinish(false)
        SetserverErr(false)
      
          navigator("/Home")
        
  },7000)  

      
  




}})
} else {
// alert("Insersion echouée")
  SetData(false)
  SetFinish(false)
  SetErrData(false)
  SetserverErr(true)
}
},8000);
})}


console.log("data  ",data)
    return(
        <div>
               {console.log(soutenance)}   <div className="page-wrapper">
			
            <div className="content container-fluid">

            <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Gestion de soutenance</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                          <form onSubmit={e => (handleSubmit(e))}>
                        <div className="mb-3">
  <label  className="form-label">Salle :</label>
  <input type="text" className="form-control" placeholder="Salle" name="Salle" value={soutenance.Salle} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label  className="form-label">Date :</label>
  <input type="date" className="form-control" placeholder="Date" name="Date" value={soutenance.Date} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label  className="form-label">Heure :</label>
  <input type="timre" className="form-control" placeholder="Heure" name="Heure" value={soutenance.Heure} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label  className="form-label">Présidant :</label>
<select className="form-select" aria-label="Default select example" name="Presidant" defaultValue={soutenance.Presidant} onChange={handleChange}>
  <option selected>Presidant</option>
  {data.map((item,index)=>{
    return(
        <option key={index} name="Presidant" value={item._id}>{item.nom} {item.prenom}</option>
    )
  })}

</select>
</div>
<div className="mb-3">
  <label  className="form-label">Rapporteur :</label>
<select className="form-select" aria-label="Default select example" name="Rapporteur" defaultValue={soutenance.Rapporteur} onChange={handleChange}>
  <option selected>Rapporteur</option>
  {data.map((item,index)=>{
    return(
        <option key={index} name="Rapporteur" value={item._id}>{item.nom} {item.prenom}</option>
    )
  })}
</select>
</div>
{!WaitingServer &&
<div className="mb-3">
<button type="submit" class="btn btn-primary">Submit</button>
</div>}
{WaitingServer &&
<div className="mb-3">
<button type="submit" class="btn btn-info">Looding ...</button>
</div>}
</form>
                        </div>
                    </div>
                    {Finish && !errData && Data && <div className="alert alert-success" role="alert">
Soutenance Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
Soutenance Failed  !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                </div>
            </div>
        </div>
        </div>
    )
}