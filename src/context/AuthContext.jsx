import React from "react"
import { createContext, useEffect } from "react";


export const AuthContext =createContext();


export const AuthContextProvider = ( {children}) =>{
const [token, setToken] = React.useState("");
const[email, setEmail]= React.useState("");
const [password, setPassword] =React.useState("");


const HandleClick =() =>{

    const cred={
        email: email,
        password: password
    } 
    fetch(`https://reqres.in/api/login`,{
        method: "POST",
        body:JSON.stringify(cred),
        headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then (data=>setToken(data.token)).catch(err =>console.log(err));
}
const HandleLogOut= ()=>{
    setToken("");
    setEmail("");
    setPassword("")
}


    return <AuthContext.Provider value={{token, HandleClick, setEmail, setPassword,HandleLogOut}}>{children}</AuthContext.Provider>

}
