import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserRoute from "./AlertProtection";
import AuthContext from "./AuthContexe";

import axios from "axios";

export default function DemandeStage() {

const authContexe=useContext(AuthContext)
const Connection=authContexe.Connect

    const  navigator = useNavigate();
    var style = {};
    const [visible, SetVisible] = useState('hidden')

    if (visible === 'visible') {
        style =
        {
            visibility: 'visible'
        }
    } else {
        style =
        {
            visibility: 'hidden'
        }
    }

    function handleCheck(e) {
        SetVisible('visible')
        SetStage({
            ...stage,
           typeStage: e.target.value

        })
    }

    function handleCheck2(e) {
        SetVisible('hidden')
        SetStage({
            ...stage,
           typeStage: e.target.value

        })
    }

//
const[WaitingServer,SetWaitingServer]=useState(false)
const[Finish,SetFinish]=useState(false)
const[Data,SetData]=useState(false)
const[errData,SetErrData]=useState(false)
const [serverErr,SetserverErr]=useState(null)

    //
    const [Classes, SetClasses] = useState("Choisir votre classe")
    const [Classes1, SetClasses1] = useState("Choisir votre classe")
   


    const user=JSON.parse(localStorage.getItem("user"))
    const idUser=user._id
    const [stage,SetStage]=useState({
            nom: "",
            prenom: "",
            email: "",
            tel: "",
            cin: "",
            parcours: "",
            classe: "",
            nom1: "",
            prenom1: "",
            email1: "",
            tel1: "",
            cin1: "",
            parcours1: "",
            classe1: "",
            posteresponsable: "",
            emailresponsable: "",
            telephoneresponsable: "",
            responsable: "",
            codepostale: "",
            ville: "",
            gouvernat: "",
            adresseSociete: "",
            raisonsociale: "",
            nomSociete: "",
            typeStage:1,
            idUser:idUser,
    })
  


   
    
  
    const handeleSelect = (e) => {
        e.preventDefault()


        if (e.target.value === "DSI") {
            SetClasses("DSI")
        } else if (e.target.value === "RSI") {
            SetClasses("RSI")
        } else if (e.target.value === "MDW") {
            SetClasses("MDW")
        } else if (e.target.value === "DM") {
            SetClasses("DM")
        } else if (e.target.value === "SEM") {
            SetClasses("SEM")
        } else {
            SetClasses(null)
        }

        handleStage(e)

    }
    const handeleSelect2 = (e) => {
        e.preventDefault()
        if (e.target.value === "DSI") {
            SetClasses1("DSI")
        } else if (e.target.value === "RSI") {
            SetClasses1("RSI")
        } else if (e.target.value === "MDW") {
            SetClasses1("MDW")
        } else if (e.target.value === "DM") {
            SetClasses1("DM")
        } else if (e.target.value === "SEM") {
            SetClasses1("SEM")
        } else {
            SetClasses1(null)
        }

        handleStage(e)

    }

    const handleStage = e => {
        const { name, value } = e.target
        SetStage({
            ...stage,
            [name]: value

        })

    }

    function DemanderStage(e) {
        e.preventDefault();
      
        setTimeout(()=>{
            const { nom,prenom,parcours,classe,cin,tel, email ,
                nom1,prenom1,parcours1,classe1,cin1,tel1, email1 ,
              posteresponsable,emailresponsable, telephoneresponsable,responsable,codepostale,ville,gouvernat,adresseSociete,raisonsociale, nomSociete,
              typeStage,idUser}=stage
              SetWaitingServer(true)
              setTimeout(()=>{
       if (nom && prenom && parcours && classe && cin && tel && email &&  posteresponsable && emailresponsable && telephoneresponsable && responsable && codepostale && ville && gouvernat && adresseSociete && raisonsociale && nomSociete && typeStage && idUser) {
    axios.post('http://localhost:5005/demanderStage', stage)
    .then(res=>{
        console.log(res.data)
        if(!res.ok){
            SetserverErr(true)
            SetFinish(true)
            SetWaitingServer(false)
            SetData(false)
            SetErrData(false)
            SetStage({
                nom: "",
            prenom: "",
            email: "",
            tel: "",
            cin: "",
            parcours: "",
            classe: "",
            nom1: "",
            prenom1: "",
            email1: "",
            tel1: "",
            cin1: "",
            parcours1: "",
            classe1: "",
            posteresponsable: "",
            emailresponsable: "",
            telephoneresponsable: "",
            responsable: "",
            codepostale: "",
            ville: "",
            gouvernat: "",
            adresseSociete: "",
            raisonsociale: "",
            nomSociete: "",
            typeStage:1,
            idUser:idUser,
            })
          }
        if(res.data._message==="Stage validation failed"){
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
            SetStage({
                nom: "",
                prenom: "",
                email: "",
                tel: "",
                cin: "",
                parcours: "",
                classe: "",
                nom1: "",
                prenom1: "",
                email1: "",
                tel1: "",
                cin1: "",
                parcours1: "",
                classe1: "",
                posteresponsable: "",
                emailresponsable: "",
                telephoneresponsable: "",
                responsable: "",
                codepostale: "",
                ville: "",
                gouvernat: "",
                adresseSociete: "",
                raisonsociale: "",
                nomSociete: "",
                typeStage:1,
                idUser:idUser,
          }) 
            setTimeout(()=>{
             SetErrData(false)
             SetData(false)
              SetFinish(false)
              SetserverErr(false)
            
                navigator("/CahierCharge")
              
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
        <UserRoute/>
    )
}else{
    return (
        <div>
{console.log("user id :", user._id)}
          {console.log(stage)}
         
          <form onSubmit={e => (DemanderStage(e))}>
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Informations Etudiant 1</h1>
                      
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Nom" value={stage.nom} name="nom" required style={{ padding: '30px 20px' }} onChange={handleStage}/>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Prenom" value={stage.prenom} name="prenom" required style={{ padding: '30px 20px' }}  onChange={handleStage}/>

                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" value={stage.email} name="email" required style={{ padding: '30px 20px' }}  onChange={handleStage} />

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Telephone :
                                        <input type="tel" className="form-control bg-light border-0" placeholder="tel" value={stage.tel} name="tel" required style={{ padding: '30px 20px' }}  onChange={handleStage} />

                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Cin :
                                        <input type="number" className="form-control bg-light border-0" placeholder="Cin" value={stage.cin} name="cin" required style={{ padding: '30px 20px' }}  onChange={handleStage} />

                                    </div>
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Parcours :

                                        <select className="custom-select bg-light border-0 px-3" value={stage.parcours} style={{ height: '60px' }}  onChange={handeleSelect} name="parcours"   >
                                            <option name="parcours" value={"Choisir ton parcours"}>Choisir ton parcours</option>
                                            <option name="parcours" value={"DSI"}>DSI</option>
                                            <option name="parcours" value={"RSI"}>RSI</option>
                                            <option name="parcours" value={"MDW"}>MDW</option>
                                            <option name="parcours" value={"SEM"}>SEM</option>
                                            <option name="parcours" value={"DM"}>DM</option>
                                        </select>


                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Classe :
                                        {Classes === "DSI" ?
                                            (<select className="custom-select bg-light border-0 px-3" value={stage.classe} style={{ height: '60px' }}  onChange={handleStage} name="classe"   >
                                                <option name="classe" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                <option name="classe" value={"DSI31"}>DSI31</option>
                                                <option name="classe" value={"DSI32"}>DSI32</option>
                                                <option name="classe" value={"DSI33"}>DSI33</option>
                                            </select>)
                                            : Classes === "RSI" ?
                                                (<select className="custom-select bg-light border-0 px-3" value={stage.classe} style={{ height: '60px' }}  onChange={handleStage} name="classe"   >
                                                    <option name="classe" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                    <option name="classe" value={"RSI31"}>RSI31</option>
                                                    <option name="classe" value={"RSI32"}>RSI32</option>
                                                </select>)

                                                : Classes === "DM" ?

                                                    (<select className="custom-select bg-light border-0 px-3" value={stage.classe} style={{ height: '60px' }}  onChange={handleStage} name="classe"   >
                                                        <option name="classe" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                        <option name="classe" value={"DM31"}>DM31</option>
                                                    </select>)

                                                    : Classes === "SEM" ?

                                                        (<select className="custom-select bg-light border-0 px-3" value={stage.classe} style={{ height: '60px' }}  onChange={handleStage} name="classe"   >
                                                            <option name="classe" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                            <option name="classe" value={"SEM31"}>SEM31</option>
                                                        </select>)

                                                        : Classes === "MDW" ?

                                                            (<select className="custom-select bg-light border-0 px-3" value={stage.classe} style={{ height: '60px' }}  onChange={handleStage} name="classe"   >
                                                                <option name="classe" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                                <option name="classe" value={"MDW31"}>MDW31</option>
                                                            </select>)

                                                            : (

                                                                <select className="custom-select bg-light border-0 px-3" value={stage.classe} style={{ height: '60px' }}  onChange={handleStage} name="classe">
                                                                    <option name="classe" value="Choisir to classse ">Choisir to classse</option>
                                                                    <option name="classe" value="   "> </option>
                                                                </select>
                                                            )}


                                    </div>
                                </div>

                            </div>

                            <div className="form-row">

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="typeStage" value="1"  id="flexRadioDefault1" onChange={handleCheck2} />
                                <label className="form-check-label" >
                                    Monome
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="typeStage" value="2" id="flexRadioDefault2" onChange={handleCheck} />
                                <label className="form-check-label">
                                    Binome
                                </label>
                            </div>


                      </div>
                </div>

                <div className="col-lg-6 py-5" style={style}>
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Informations Etudiant 2</h1>
                       
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <input type="text" className="form-control bg-light border-0" value={stage.nom1} name="nom1"  placeholder="Nom" style={{ padding: '30px 20px' }}  onChange={handleStage} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <input type="text" className="form-control bg-light border-0" value={stage.prenom1} name="prenom1"  placeholder="Prenom" style={{ padding: '30px 20px' }} onChange={handleStage} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <input type="email" className="form-control bg-light border-0" value={stage.email1} name="email1"  placeholder="Email" style={{ padding: '30px 20px' }} onChange={handleStage} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Telephone :
                                        <input type="tel" className="form-control bg-light border-0" value={stage.tel1} name="tel1"  placeholder="Telephone" style={{ padding: '30px 20px' }} onChange={handleStage} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Cin :
                                        <input type="number" className="form-control bg-light border-0" value={stage.cin1} name="cin1"  placeholder="Cin" style={{ padding: '30px 20px' }} onChange={handleStage} />
                                    </div>
                                </div>

                            </div>
                            <div className="form-row">



                            </div>
                            <div className="form-row">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Parcours :
                                        <select className="custom-select bg-light border-0 px-3" value={stage.parcours1} style={{ height: '60px' }} onChange={handeleSelect2} name="parcours1"   >
                                            <option name="parcours1" value={"Choisir ton parcours"}>Choisir ton parcours</option>
                                            <option name="parcours1" value={"DSI"}>DSI</option>
                                            <option name="parcours1" value={"RSI"}>RSI</option>
                                            <option name="parcours1" value={"MDW"}>MDW</option>
                                            <option name="parcours1" value={"SEM"}>SEM</option>
                                            <option name="parcours1" value={"DM"}>DM</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Classe :
                                        {Classes1 === "DSI" ?
                                            (<select className="custom-select bg-light border-0 px-3" value={stage.classe1} style={{ height: '60px' }} onChange={handleStage} name="classe1"   >
                                                <option name="classe1" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                <option name="classe1" value={"DSI31"}>DSI31</option>
                                                <option name="classe1" value={"DSI32"}>DSI32</option>
                                                <option name="classe1" value={"DSI33"}>DSI33</option>
                                            </select>)
                                            : Classes1 === "RSI" ?
                                                (<select className="custom-select bg-light border-0 px-3" value={stage.classe1} style={{ height: '60px' }} onChange={handleStage} name="classe1"   >
                                                    <option name="classe1" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                    <option name="classe1" value={"RSI31"}>RSI31</option>
                                                    <option name="classe1" value={"RSI32"}>RSI32</option>
                                                </select>)

                                                : Classes1 === "DM" ?

                                                    (<select className="custom-select bg-light border-0 px-3" value={stage.classe1} style={{ height: '60px' }} onChange={handleStage} name="classe1"   >
                                                        <option name="classe1" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                        <option name="classe1" value={"DM31"}>DM31</option>
                                                    </select>)

                                                    : Classes1 === "SEM" ?

                                                        (<select className="custom-select bg-light border-0 px-3" value={stage.classe1} style={{ height: '60px' }} onChange={handleStage} name="classe1"   >
                                                            <option name="classe1" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                            <option name="classe1" value={"SEM31"}>SEM31</option>
                                                        </select>)

                                                        : Classes1 === "MDW" ?

                                                            (<select className="custom-select bg-light border-0 px-3" value={stage.classe1} style={{ height: '60px' }} onChange={handleStage} name="classe1"   >
                                                                <option name="classe1" value={"Choisir ton classe"}>Choisir ton classe</option>
                                                                <option name="classe1" value={"MDW31"}>MDW31</option>
                                                            </select>)

                                                            : (

                                                                <select className="custom-select bg-light border-0 px-3" value={stage.classe1} style={{ height: '60px' }} onChange={handleStage} name="classe1">
                                                                    <option name="classe1" value="Choisir to classse ">Choisir to classse</option>
                                                                    <option name="classe1" value="   "> </option>
                                                                </select>
                                                            )}

                                    </div>
                                </div>

                            </div>


                      
                    </div>
                </div>
            </div>
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Informations Société</h1>
                       
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Nom Société" value={stage.nomSociete} name="nomSociete" required onChange={handleStage} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Raison sociale :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Raison Sociale" value={stage.raisonsociale} name="raisonsociale" onChange={handleStage} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Adresse
                                        <input type="text" className="form-control bg-light border-0" placeholder="Adresse Société" value={stage.adresseSociete} name="adresseSociete" required onChange={handleStage} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Gouvernat :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Gouvernat" value={stage.gouvernat} name="gouvernat" onChange={handleStage} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Ville
                                        <input type="text" className="form-control bg-light border-0" placeholder="Ville" value={stage.ville} name="ville" required onChange={handleStage} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Code postale :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Code postale " value={stage.codepostale} name="codepostale" onChange={handleStage} required style={{ padding: '30px 20px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Responsable de stage :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Responsable de stage " value={stage.responsable} name="responsable" onChange={handleStage} required style={{ padding: '30px 20px' }} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Numéro de contact :
                                        <input type="tel" className="form-control bg-light border-0" placeholder="Numéro de contact" value={stage.telephoneresponsable} name="telephoneresponsable" onChange={handleStage} required style={{ padding: '30px 20px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Mail du responsable :
                                        <input type="email" className="form-control bg-light border-0" placeholder="Mail du responsable" value={stage.emailresponsable} name="emailresponsable" onChange={handleStage}required style={{ padding: '30px 20px' }} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Poste de responsable :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Poste de responsable " value={stage.posteresponsable} name="posteresponsable" onChange={handleStage} required style={{ padding: '30px 20px' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                            {!WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-primary btn-block" type="submit"  style={{ height: '60px' }}>Suivant</button>
                                </div>}
                          
                            {WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-warning btn-block" type="button" style={{ height: '60px' }}>Chargement ... </button>
                                </div>}
  </div> 
                    </div>
                    {Finish && !errData && Data && <div className="alert alert-success" role="alert">
Demande Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
  Demande Failed  !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                </div>
            </div>
</form>
        </div>
        
      
      
    )
}

   
}
