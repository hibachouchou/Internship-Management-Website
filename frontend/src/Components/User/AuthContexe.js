
import React, { createContext, useEffect, useState } from "react";
import { isConnected } from "../../Helpers/User/AuthHelper";


 const AuthContext=createContext()
 function AuthContextProvider(props){

    const [Connect,SetConnect]=useState(false)
   


    useEffect(()=>{
        if(isConnected){
            SetConnect(true)
          //  localStorage.setItem('connection1', true);
          //  localStorage.setItem('connection2', false);
        }else{
            SetConnect(false)  
         //   localStorage.setItem('connection1', false);
        }
    },[])
    return(
        <AuthContext.Provider value={{Connect,SetConnect}}>
{props.children}
        </AuthContext.Provider>
    )
}
export {AuthContextProvider}
export default AuthContext