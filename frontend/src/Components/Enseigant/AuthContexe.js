
import React, { createContext, useEffect, useState } from "react";
import { isAuth } from "../../Helpers/Ens/AuthHelper";



 const AuthContext2=createContext()
 function AuthContextProvider2(props){

const[Connection,SetConnection]=useState(false)


    useEffect(()=>{
        if(isAuth){
            SetConnection(true)
        //    localStorage.setItem('connection2', true);
          //  localStorage.setItem('connection1', false);
        }else{
            SetConnection(false)  
        //    localStorage.setItem('connection2', false);
        }
    },[])
    return(
        <AuthContext2.Provider value={{Connection,SetConnection}}>
{props.children}
        </AuthContext2.Provider>
    )
}
export {AuthContextProvider2}
export default AuthContext2