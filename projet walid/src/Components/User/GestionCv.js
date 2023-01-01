
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserRoute from "./AlertProtection";
import AuthContext from "./AuthContexe";



export default function GestionCV() {
//

let navigator=useNavigate()
const[WaitingServer,SetWaitingServer]=useState(false)
const[Finish,SetFinish]=useState(false)
const[Data,SetData]=useState(false)
const[errData,SetErrData]=useState(false)
const [serverErr,SetserverErr]=useState(null)


const authContexe=useContext(AuthContext)
const Connection=authContexe.Connect
const [Compétance,SetCompetence]=useState([])
const [state,SetState]=useState(null)

//

const user=JSON.parse(localStorage.getItem("user"))
const idUser=user._id
    var style;
    const [cv, SetCV] = useState({
        nom: "",
        prenom: "",
        email: "",
        numero: "",
        profil: "",
        parcours: "",
        Compétance: [],
        idUser:idUser
    })


    const handeleSelect = (e) => {
        e.preventDefault()


        if (e.target.value === "DSI") {
            SetState("DSI")
        } else if (e.target.value === "RSI") {
            SetState("RSI")
        } else if (e.target.value === "MDW") {
            SetState("MDW")
        } else if (e.target.value === "DM") {
            SetState("DM")
        } else if (e.target.value === "SEM") {
            SetState("SEM")
        } else {
            SetState(null)
        }

        handleCV(e)

    }
    const handleCV = e => {
        const { name, value } = e.target
        SetCV({
            ...cv,
            [name]: value,
        

        })

    }

    const handleChecked = e => {
        const { value, checked } = e.target
        if (checked) {
            SetCompetence(pre => [...pre, value] )
            SetCV({
                ...cv,
            Compétance: Compétance
    
            })
           
        }else{
            SetCompetence(pre => {return [...pre.filter(skill=>skill!==value)] }) 
            SetCV({
                ...cv,
            Compétance: Compétance
    
            })
        }

    }

    function RemplirCV(e) {
        e.preventDefault();
      
        setTimeout(()=>{
            const {nom,prenom,parcours,Compétance,profil,numero, email ,idUser}=cv
              SetWaitingServer(true)
              setTimeout(()=>{
       if (nom && prenom && parcours && Compétance && numero && idUser && email ) {
    axios.post('http://localhost:5005/RemplirCV', cv)
    .then(res=>{
        console.log(res.data)
        if(!res.ok){
            SetserverErr(true)
            SetFinish(true)
            SetWaitingServer(false)
            SetData(false)
            SetErrData(false)
            SetCV({
                nom: "",
                prenom: "",
                email: "",
                numero: "",
                profil: "",
                parcours: "",
                Compétance: [],
            idUser:idUser,
            })
          }
        if(res.data._message==="Cv validation failed"){
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
            SetCV({
                nom: "",
                prenom: "",
                email: "",
                numero: "",
                profil: "",
                parcours: "",
                Compétance: [],
                idUser:idUser,
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
   



if(!Connection){
    return(<UserRoute/>)
}else{
    return (
        <div>
            {console.log("idUser ",idUser)}
             {console.log(cv)}
            {console.log(Compétance)}
            {console.log("CV: ",cv.Compétance)}
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Créer Votre CV</h1>
                        <form onSubmit={e => (RemplirCV(e))}>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Nom" value={cv.nom} name="nom" style={{ padding: '30px 20px' }} onChange={handleCV} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <input type="text" className="form-control bg-light border-0" placeholder="Prenom" style={{ padding: '30px 20px' }} value={cv.prenom} name="prenom"  onChange={handleCV}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Profile :
                                        <div className="mb-3">
                                            <textarea name="profil" value={cv.profil}  onChange={handleCV} className="form-control" id="exampleFormControlTextarea1" rows="4" ></textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="form-row">

                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Parcours :
                                        <select className="custom-select bg-light border-0 px-3" style={{ height: '60px' }} defaultValue={cv.parcours} name="parcours"  onChange={handeleSelect}>
                                            <option name="parcours" >Parcours </option>
                                            <option name="parcours" defaultValue="DSI">DSI</option>
                                            <option name="parcours" defaultValue="RSI">RSI</option>
                                            <option name="parcours" defaultValue="SEM">SEM </option>
                                            <option name="parcours" defaultValue="MDW">MDW </option>
                                            <option name="parcours" defaultValue="DM">DM </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                              {state==="DSI" ? <div className="col-sm-6">
                                    <div className="form-group">
                                        Compétances :<br />
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="Compétance 1" name="Compétance" onChange={handleChecked} />
                                            <label className="form-check-label">
                                                Compétance 1
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Compétance 2" name="Compétance" onChange={handleChecked} />
                                            <label className="form-check-label" >
                                                Compétance 2
                                            </label>
                                        </div>
                                    </div>
                                </div>      
                                : state==="MDW"?
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Compétances :<br />
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="Compétance 3" name="Compétance" onChange={handleChecked} />
                                            <label className="form-check-label">
                                                Compétance 3
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Compétance 4" name="Compétance" onChange={handleChecked} />
                                            <label className="form-check-label" >
                                                Compétance 4
                                            </label>
                                        </div>
                                    </div>
                                </div>       : state==="SEM"?
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Compétances :<br />
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="Compétance 5" name="Compétance" onChange={handleChecked} />
                                            <label className="form-check-label">
                                                Compétance 5
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Compétance 6" name="Compétance" onChange={handleChecked} />
                                            <label className="form-check-label" >
                                                Compétance 6
                                            </label>
                                        </div>
                                    </div>
                                </div>  
                                
                            :state==="RSI"?
                            <div className="col-sm-6">
                                <div className="form-group">
                                    Compétances :<br />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="Compétance 7" name="Compétance" onChange={handleChecked} />
                                        <label className="form-check-label">
                                            Compétance 7
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Compétance 8" name="Compétance" onChange={handleChecked} />
                                        <label className="form-check-label" >
                                            Compétance 8
                                        </label>
                                    </div>
                                </div>
                            </div>  

                            :state==="DM"?
                            <div className="col-sm-6">
                                <div className="form-group">
                                    Compétances :<br />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="Compétance 9" name="Compétance" onChange={handleChecked} />
                                        <label className="form-check-label">
                                            Compétance 9
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Compétance 10" name="Compétance" onChange={handleChecked} />
                                        <label className="form-check-label" >
                                            Compétance 10
                                        </label>
                                    </div>
                                </div>
                            </div>  

                  

                            :
                            <div className="col-sm-6">
                                 Compétances :<br />
                            </div>  
                            }
                                         
                                </div>
                                 <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <br />
                                            <h3>Contact:</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            Telephone :
                                            <input type="tel" className="form-control bg-light border-0" placeholder="Telephone" value={cv.numero} name="numero" style={{ padding: '30px 20px' }}   onChange={handleCV} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            Email :
                                            <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ padding: '30px 20px' }} value={cv.email} name="email"   onChange={handleCV}/>
                                        </div>
                                    </div>
                            

                            </div>




                            <div className="form-row">
                            {!WaitingServer &&
<div className="col-sm-6">
    <button className="btn btn-primary btn-block" type="submit" style={{ height: '60px' }}>Submit</button>
</div>
}
{WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-warning btn-block" type="button" style={{ height: '60px' }}>Loading ... </button>
                                </div>}
</div>


                        </form>
                    </div>
                    {Finish && !errData && Data && <div className="alert alert-success" role="alert">
CV Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
  CV Failed  !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                </div>

                <div className="col-lg-6 py-5" style={style}>
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">CV</h1>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Nom :
                                        <h5>{cv.nom}</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Prenom :
                                        <h5> {cv.prenom} </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Profile :
                                        <div className="mb-3">

                                            <p>{cv.profil}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Parcours :
                                        <h5>{cv.parcours}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Compétances :
                                      
                                        {Compétance.map((items)=>{
return <ul key={Math.random()}><li>{items}</li></ul>
                                        })}
                                            

                                        
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">

                                <div className="col-sm-6">
                                    <h3>Contact :</h3>
                                </div>
                            </div>
                            <div className="form-row">

                                <div className="col-sm-6">
                                    <div className="form-group">

                                        Telephone :
                                        <h5>{cv.numero}</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        Email :
                                        <h5>{cv.email}</h5>
                                    </div>
                                </div>
                            </div>




                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
    
}
