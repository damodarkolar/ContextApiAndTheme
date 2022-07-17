import { createContext } from "react";
import React from "react";


export const TheameContext=createContext();


export  const TheameContextProvider = ({children }) => {
    const [theame, setTheame]=React.useState(false);

    const HandleTheameChange =() =>{
        setTheame(!theame);
    }

const value={theame, HandleTheameChange}
    return(
        <TheameContext.Provider value={value} >{children}</TheameContext.Provider>
    )
}


