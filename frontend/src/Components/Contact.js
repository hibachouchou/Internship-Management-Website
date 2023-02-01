import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";




export default function Contact() {

    let navigator=useNavigate()

    const[WaitingServer,SetWaitingServer]=useState(false)
    const[Finish,SetFinish]=useState(false)
    const[Data,SetData]=useState(false)
    const[errData,SetErrData]=useState(false)
    const [serverErr,SetserverErr]=useState(null)

    function handleSubmit(e) {
        e.preventDefault();
      
        setTimeout(()=>{
            const { nom,email,object,msg}=contact
              SetWaitingServer(true)
              setTimeout(()=>{
       if ( nom && email && object && msg  ) {
    axios.post('http://localhost:5005/Contact', contact)
    .then(res=>{
        console.log(res.data)
        if(!res.ok){
            SetserverErr(true)
            SetFinish(true)
            SetWaitingServer(false)
            SetData(false)
            SetErrData(false)
            SetContact({
                nom: "",
                email: "",
                object: "",
                msg: "",
            })
          }
        if(res.data._message==="Contact validation failed"){
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
            SetContact({
                nom: "",
                email: "",
                object: "",
                msg: "",
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
   
      

    const [contact, SetContact] = useState({
        nom: "",
        email: "",
        object: "",
        msg: "",
      
    })

    const handleContact = e => {
        const { name, value } = e.target
        SetContact({
            ...contact,
            [name]: value

        })
    }

return(
    <div>
     <div className="container-fluid py-5">
        {console.log(contact)}
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="bg-light d-flex flex-column justify-content-center px-5" style={{height:" 450px"}}>
                        <div className="d-flex align-items-center mb-5">
                            <div className="btn-icon bg-primary mr-4">
                                <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Notre adresse</h4>
                                <p className="m-0">Mrezga , Nabeul</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <div className="btn-icon bg-danger mr-4">
                                <i className="fa fa-2x fa-phone-alt text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Notre contact</h4>
                                <p className="m-0">+216 53154992</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="btn-icon bg-warning mr-4">
                                <i className="fa fa-2x fa-envelope text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Notre email</h4>
                                <p className="m-0">isetn-depinfo@walid.fr</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Besoin d'aide ?</h6>
                        <h1 className="display-4">Envoyer nous un message</h1>
                    </div>
                    <div className="contact-form">
                    {Finish && !errData && Data && <div className="alert alert-success" role="alert">
Msg  Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
Msg  Failed  !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                        <form onSubmit={e => (handleSubmit(e))}>
                            <div className="row">
                                <div className="col-6 form-group">
                                
                                    <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Nom" required="required"  name="nom" value={contact.nom} onChange={handleContact} />
                                </div>
                              
                                <div className="col-6 form-group">
                                    <input type="email" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Email" required="required" name="email" value={contact.email} onChange={handleContact} />
                                </div>
                            </div>
                            <div className="form-group">
                               
                                <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Subject" required="required" name="object" value={contact.object} onChange={handleContact}/>
                            </div>
                            <div className="form-group">
                                
                                <textarea className="form-control border-top-0 border-right-0 border-left-0 p-0" rows="5" placeholder="Message" required="required"  name="msg" value={contact.msg} onChange={handleContact}/>
                            </div>
                            {!WaitingServer &&
                            <div>
                                <button className="btn btn-primary py-3 px-5" type="submit">Envoyer un message</button>
                            </div>}
                            {WaitingServer &&
                            <div>
                                <button className="btn btn-info py-3 px-5" type="submit">Chargement ...</button>
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)






} 