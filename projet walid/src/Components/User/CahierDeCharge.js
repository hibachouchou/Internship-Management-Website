import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserRoute from "./AlertProtection";
import AuthContext from "./AuthContexe";

export default function CahierDeCharge() {
    
    const user=JSON.parse(localStorage.getItem("user"))
    const idUser=user._id

    const authContexe=useContext(AuthContext)
    const Connection=authContexe.Connect

  const [details,SetDetails]=useState([])

let navigator=useNavigate()

const[WaitingServer,SetWaitingServer]=useState(false)
const[Finish,SetFinish]=useState(false)
const[Data,SetData]=useState(false)
const[errData,SetErrData]=useState(false)
const [serverErr,SetserverErr]=useState(null)

    

    const [cahierCharge, SetCahierCharge] = useState({
        titre: "",
        besoinfonctionelle: "",
        technologies: "",
        file: null,
        langue: "",
        details: details,
        idUser:idUser
    })
    function convertToBase64(file){
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result)
          };
          fileReader.onerror = (error) => {
            reject(error)
          }
        })
      }
    const handleFile = async e => {
        console.log(e.target.files[0])
        const file1 = e.target.files[0];
        const base64 = await convertToBase64(file1);
       // console.log(base64)
        SetCahierCharge({
         
            ...cahierCharge,
          //  file:base64 
               file:file1

        })
    }
    const handleCahierCharge = e => {
        const { name, value } = e.target
        SetCahierCharge({
            ...cahierCharge,
            [name]: value

        })
    }
        const handleChecked = e => {
            const { value, checked } = e.target
            if (checked) {
                SetDetails(pre => [...pre, value] )
                SetCahierCharge({
                    ...cahierCharge,
                    details: details
        
                })
               
            }else{
                SetDetails(pre => {return [...pre.filter(skill=>skill!==value)] }) 
                SetCahierCharge({
                    ...cahierCharge,
                    details: details
        
                })
            }
    
        
    }


    function handleSubmit(e) {
        e.preventDefault();
      
        setTimeout(()=>{
            const { titre,besoinfonctionelle,technologies,file,langue,details,idUser}=cahierCharge
              SetWaitingServer(true)
              setTimeout(()=>{
       if ( titre && besoinfonctionelle && technologies && file && langue && details && idUser ) {
    axios.post('http://localhost:5005/cahiercharge', cahierCharge)
    .then(res=>{
        console.log(res.data)
        if(!res.ok){
            SetserverErr(true)
            SetFinish(true)
            SetWaitingServer(false)
            SetData(false)
            SetErrData(false)
            SetCahierCharge({
                titre: "",
                besoinfonctionelle: "",
                technologies: "",
                file: null,
                langue: "",
                details: [],
                idUser:idUser
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
            SetCahierCharge({
                titre: "",
                besoinfonctionelle: "",
                technologies: "",
                file: null,
                langue: "",
                details: [],
                idUser:idUser
          }) 
            setTimeout(()=>{
             SetErrData(false)
             SetData(false)
              SetFinish(false)
              SetserverErr(false)
            
                navigator("/Validation")
              
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
                {console.log(cahierCharge)}
                {console.log(cahierCharge.details)}
                {console.log(details)}
                {console.log(cahierCharge.file)}
                <div className="row justify-content-center bg-image mx-0 mb-5">
                    <div className="col-lg-6 py-5">
                        <div className="bg-white p-5 my-5">
                            <h1 className="text-center mb-4">Remplissage de cahier de charge</h1>
                            <form onSubmit={e => (handleSubmit(e))}>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            Titre de projet:
                                            <input type="text" className="form-control bg-light border-0" placeholder="Titre de projet" style={{ padding: '30px 20px' }} name="titre" value={cahierCharge.titre} onChange={handleCahierCharge} />
                                        </div>
                                    </div>
    
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            Détails de projet:
    
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="details" value=" Développement web /application" onChange={handleChecked} />
                                                <label className="form-check-label">
                                                    Développement web /application
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" name="details" value="Cloud computing" onChange={handleChecked} />
                                                <label className="form-check-label" >
                                                    Cloud computing
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="details" value="Machine Learning et AI" onChange={handleChecked} />
                                                <label className="form-check-label">
                                                    Machine Learning et AI
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" name="details" value="Développement mobile" onChange={handleChecked} />
                                                <label className="form-check-label" >
                                                    Développement mobile
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="details" value="Développement 2D/3D" onChange={handleChecked} />
                                                <label className="form-check-label">
                                                    Développement 2D/3D
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" name="details" value="Reverse Engineering" onChange={handleChecked} />
                                                <label className="form-check-label" >
                                                    Reverse Engineering
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="details" value="Sécurité" onChange={handleChecked} />
                                                <label className="form-check-label">
                                                    Sécurité
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" name="details" value="Big Data" onChange={handleChecked} />
                                                <label className="form-check-label" >
                                                    Big Data
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="details" value="Systéme embarqués" onChange={handleChecked} />
                                                <label className="form-check-label">
                                                    Systéme embarqués
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" name="details" value="Administration Systéme et réseaux" onChange={handleChecked} />
                                                <label className="form-check-label" >
                                                    Administration Systéme et réseaux
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="details" value="Réalité virtuelle et augmenté" onChange={handleChecked} />
                                                <label className="form-check-label">
                                                    Réalité virtuelle et augmenté
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" name="details" value="Urbanisation SI" onChange={handleChecked} />
                                                <label className="form-check-label" >
                                                    Urbanisation SI
                                                </label>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            Besoins fonctionelles :
                                            <textarea className="form-control bg-light border-0" placeholder="" style={{ padding: '30px 20px' }} rows="5" name="besoinfonctionelle" value={cahierCharge.besoinfonctionelle} onChange={handleCahierCharge}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            Technologies , Environnement et matériels:
                                            <textarea className="form-control bg-light border-0" placeholder="" style={{ padding: '30px 20px' }} rows="5" name="technologies" value={cahierCharge.technologies} onChange={handleCahierCharge}></textarea>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div className="form-row">
    
                                    <div className="col-sm-6">
                                        Importer ton cahier de charge ici :
                                        <input type="file" className="form-control bg-light border-0" style={{ padding: '30px 20px' }} name="file"  onChange={handleFile} />
                                    </div>
                                </div>
                                <div className="form-row">
    
                                    <div className="col-sm-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" id="flexRadioDefault1" name="langue" value={"Français"} onChange={handleCahierCharge} />
                                            <label className="form-check-label" >
                                                Français
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" id="flexRadioDefault2" name="langue" value={"Anglais"} onChange={handleCahierCharge} />
                                            <label className="form-check-label">
                                                Anglais
                                            </label>
                                        </div>
    
    
    
                                    </div>
                                </div>
                                <div className="form-row">
    
                                {!WaitingServer &&<div className="col-sm-6">
                                        <button className="btn btn-primary btn-block" type="submit"  style={{ margin: '30px 20px', height: '60px' }} >Suivant</button>
                                        <br />      <br />
                                    </div>}
                                    {WaitingServer &&
                                <div className="col-sm-6">
                                    <button className="btn btn-warning btn-block" type="button" style={{ height: '60px' }}>Loading ... </button>
                                </div>}
                                </div>
    
                            </form>
                        </div>
                        {Finish && !errData && Data && <div className="alert alert-success" role="alert">
Cahier de charge Aded Successfully !
</div>} 
{Finish===true && errData===true && Data===false &&  <div className="alert alert-danger" role="alert">
Cahier de chargeFailed  !
</div>} 
{Finish===true && serverErr===true && Data===false && errData===false && <div className="alert alert-danger" role="alert">
  Erreur de serveur !
</div>} 
                    </div>
                </div>
    
            </div>
        )
    }
   

}