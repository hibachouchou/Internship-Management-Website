
import { deleteCookie, getCookie, SetCookies } from "../Cookies"
import { deleteLocalStorage, geLocalStorage, setLocalStorage } from "../LocalStorage"

export const SetAuthentification=(token,user)=>{
    SetCookies('token',token)
    setLocalStorage('user',user)
    console.log("Everything is fine")
}

export const isConnected=()=>{

if(getCookie("token")&& geLocalStorage("user")){
    const etat1=   localStorage.setItem('connection1', true);
    return etat1
  
}else{
    const etat1=   localStorage.setItem('connection1', false);
    return etat1
}

}

export const logout=(next)=>{
deleteCookie("token")
deleteLocalStorage("user")
 localStorage.setItem('connection1', false);
 localStorage.setItem('connection2', false);
next()
}

