
import { deleteCookie, getCookie, SetCookies } from "../Cookies"
import { deleteLocalStorage, geLocalStorage, setLocalStorage } from "../LocalStorage"

export const SetAuthentification2=(token2,ens)=>{
    SetCookies('token2',token2)
    setLocalStorage('ens',ens)
    console.log("Everything is fine")
}

export const isAuth=()=>{

if(getCookie("token2")&& geLocalStorage("ens")){
  
    return geLocalStorage("ens")
  
}else{
    return null
}

}

export const logout2=(next)=>{
deleteCookie("token2")
deleteLocalStorage("ens")
next()
}

