import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import{ theame, TheameContext } from "../context/TheameContext";



const Login = () => {
    const {token, HandleClick, setEmail, setPassword, HandleLogOut} = useContext(AuthContext)
    const { theame }=useContext(TheameContext)
    


    return !token? ( <>
                <label >Email</label>
        <input type="email" onChange={(e)=> { setEmail(e.target.value)}} />
        <br/>
        <label >Password</label>
        <input type="password" onChange={(e) => { setPassword(e.target.value)}}/>
        <br/>
        <button style={theame? {color:"white",backgroundColor:"black"}: {color:"black",backgroundColor:"white"}}onClick={HandleClick}>Submit</button>
                </>) : (<><button style={theame? {color:"white",backgroundColor:"black"}: {color:"black",backgroundColor:"white"}}onClick={HandleLogOut}>Log Out</button></>)
}



export default Login