
import { deleteCookie, getCookie, SetCookies } from "../Cookies"
import { deleteLocalStorage, geLocalStorage, setLocalStorage } from "../LocalStorage"

export const SetAuthentification=(token,user)=>{
    SetCookies('token',token)
    setLocalStorage('user',user)
    console.log("Everything is fine")
}

export const isConnected=()=>{

if(getCookie("token")&& geLocalStorage("user")){
  
    return geLocalStorage("user")
  
}else{
    return null
}

}

export const logout=(next)=>{
deleteCookie("token")
deleteLocalStorage("user")
next()
}

