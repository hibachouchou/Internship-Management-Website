
import { useState } from "react"
import { deleteCookie, getCookie, SetCookies } from "../Cookies"
import { deleteLocalStorage, geLocalStorage, setLocalStorage } from "../LocalStorage"

export const SetAuthentification2=(token2,ens)=>{
    SetCookies('token2',token2)
    setLocalStorage('ens',ens)
    console.log("Everything is fine")
}

export const isAuth=()=>{
  
    if(getCookie("token2")&& geLocalStorage("ens")){
        const etat2=   localStorage.setItem('connection2', true);
        return etat2
      
    }else{
        const etat2=   localStorage.setItem('connection2', false);
        return etat2
    }
    
}

export const logout2=(next)=>{
deleteCookie("token2")
deleteLocalStorage("ens")
localStorage.setItem('connection1', false);
localStorage.setItem('connection2', false);
next()
}

