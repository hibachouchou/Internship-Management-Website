
import React, { createContext, useEffect, useState } from "react";
import { isConnected } from "../../Helpers/User/AuthHelper";


 const AuthContext=createContext()
 function AuthContextProvider(props){

const[Connect,SetConnect]=useState(undefined)


    useEffect(()=>{
        if(isConnected){
            SetConnect(true)
        }else{
            SetConnect(false)  
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