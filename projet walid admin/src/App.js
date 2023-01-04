import { useContext } from "react";
import { Route, Routes } from "react-router";
import AuthContext from "./Elements/AuthContexe";
import React from "react";
import Home from "../src/Elements/Pages/Home"
import MenuBar from "./Elements/MenuBar";
import LoginAdmin from "./Elements/LoginAdmin"; 
import Profile from "../src/Elements/Pages/Profile"
import Logout from "../src/Elements/Logout"
import ListeProfs from "../src/Elements/Pages/ListeProfs"
import PlanningSoutenance from "../src/Elements/Pages/PlanningSoutenance"
import ListeDemandesEncadrements from"../src/Elements/Pages/ListeDemandesEncadrement"
import ListeDemandesStage from "../src/Elements/Pages/ListeDemandeStages"
import CahiersDeChargeById from "../src/Elements/Pages/CahierDeChargeById"
import Etudiant1 from "../src/Elements/Pages/Etud1ById"
import Etudiant2 from "../src/Elements/Pages/Etud2ById"
import GestionSoutenance from "../src/Elements/Pages/GestionSoutenance"
import SocieteById from "../src/Elements/Pages/SocieteById"
import ListeCVs from "../src/Elements/Pages/CVs"
import ListeChaierDeCharges from "../src/Elements/Pages/ListeCahierDeCharges"
import Contacts from "./Elements/Pages/Contacts";
function App () {
  const authContexe=useContext(AuthContext)
   const CheckConnection=authContexe.SetConnect
    const Connection=authContexe.Connect
    return (
    <div>
      <LoginAdmin/>
      <MenuBar/>
<Routes>
   <Route exact path='/Home'  element={<Home />} />
   <Route exact path='/Profile'  element={<Profile/>} />
   <Route exact path='/Logout'  element={<Logout/>} />
   <Route exact path='/ConnexionAdmin'  element={<LoginAdmin/>} />
   <Route exact path='/ListeProfs'  element={<ListeProfs/>} />
   <Route exact path='/DemandesDeStage'  element={<ListeDemandesStage/>} />
   <Route exact path='/DemandeEncadrement'  element={<ListeDemandesEncadrements/>} />
   <Route exact path='/CVs'  element={<ListeCVs/>} />
   <Route exact path='/DetailsEtud1/:id'  element={<Etudiant1/>} />
   <Route exact path='/DetailsEtud2/:id'  element={<Etudiant2/>} />
   <Route exact path='/DetailsSociete/:id'  element={<SocieteById/>} />
   <Route exact path='/GestionSoutenance/:id'  element={<GestionSoutenance/>} />
   <Route exact path='//DetailsCahierCharge/:id'  element={<CahiersDeChargeById/>} />
   <Route exact path='/Soutenances'  element={<PlanningSoutenance/>} />
   <Route exact path='/CahiersDeCharge'  element={<ListeChaierDeCharges/>} />
   <Route exact path='/Contacts'  element={<Contacts/>} />
   <Route path='/*' element={<p>404 : Page not found</p>} />
   </Routes>
      </div>
    );
      }


export default App;
