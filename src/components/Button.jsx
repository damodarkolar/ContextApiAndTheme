import { TheameContext } from "../context/TheameContext";
import { useContext } from "react";


const Button =() => {
    const { theame, HandleTheameChange}=useContext(TheameContext);

    return (
        <button style={theame? {color:"white", backgroundColor:"black"}:{color:"black", backgroundColor:"white"}}onClick={HandleTheameChange}>{theame ? "Black" : "White"} </button>
    )
}


export default Button