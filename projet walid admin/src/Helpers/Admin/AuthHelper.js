import { setLocalStorage ,geLocalStorage,deleteLocalStorage} from "../LocalStorage"
import {getCookie,SetCookies,deleteCookie} from "../Cookies"


export const SetAuthentification=(token3,admin)=>{
    SetCookies('token3',token3)
    setLocalStorage('admin',admin)
    console.log("Everything is fine")
}

export const isConnected=()=>{

if(getCookie("token3")&& geLocalStorage("admin")){
  
    return geLocalStorage("admin")
  
}else{
    return null
}

}

export const logout=(next)=>{
deleteCookie("token3")
deleteLocalStorage("admin")
next()
}

