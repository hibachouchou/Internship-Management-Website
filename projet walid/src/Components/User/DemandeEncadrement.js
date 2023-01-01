
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserRoute from "./AlertProtection";
import AuthContext from "./AuthContexe";

export default function Validation1() {
    const user1=JSON.parse(localStorage.getItem("user"))
    const authContexe=useContext(AuthContext)
    const Connection=authContexe.Connect

    const user=JSON.parse(localStorage.getItem("user"))
    const idUser=user._id

const [DemandeEncadrement,SetDemandeEncadrement]=useState({
    idEns:null,
    idUser:idUser
})
    const  navigator = useNavigate();

    const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)

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



    const handleEncadrement = e => {
        const { name, value } = e.target
        SetDemandeEncadrement({
            ...DemandeEncadrement,
            [name]: value,
        

        })

    }


    function handleSubmit(e) {
        e.preventDefault();
      
        setTimeout(()=>{
            const { idEns,idUser}=DemandeEncadrement
              SetWaitingServer(true)
              setTimeout(()=>{
       if (idEns && idUser ) {
    axios.post('http://localhost:5005/demandeEncadrement', DemandeEncadrement)
    .then(res=>{
        console.log(res.data)
        if(!res.ok){
            SetserverErr(true)
            SetFinish(true)
            SetWaitingServer(false)
            SetData(false)
            SetErrData(false)
            SetDemandeEncadrement({
      
                idUser:idUser
            })
          }
        if(res.data._message===""){
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
            SetDemandeEncadrement({
          
                idUser:idUser
          }) 
            setTimeout(()=>{
             SetErrData(false)
             SetData(false)
              SetFinish(false)
              SetserverErr(false)
            
                navigator(`/Home`)
              
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
   





if(!Connection){
    return(
        <div>
            <UserRoute/>
        </div>
    )
}
    return (
        <div>
            {console.log("Demanande",DemandeEncadrement)}
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Demande d'encadrement</h1>
                        <form onSubmit={e => (handleSubmit(e))}>
                           
                       
                          

                        
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Encadrant :
                                        <select className="custom-select bg-light border-0 px-3" style={{ height: '60px' }} value={DemandeEncadrement.idEns} onChange={handleEncadrement}  name="idEns">
                                        <option value="1">...</option>
                                        {data && data.map((item)=>{
                                            return(
                                            <option  name="idEns" value={item._id} key={item._id}>{item.nom}  {item.prenom}</option>
                                            )
                                        })}
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="form-row">
                            {!WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-success btn-block" type="submit"  style={{ height: '60px' }}>Terminer</button>
                                </div>}
                                {WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-warning btn-block" type="button" style={{ height: '60px' }}>Loading ... </button>
                                </div>}
                            </div>
                        </form>
                    </div>
                </div>
                
                {Finish && !errData && Data && <div className="alert alert-success" role="alert">
Demande d'encadrement Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
Demande d'encadrement Failed  !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                </div>

        </div>
    )
}
