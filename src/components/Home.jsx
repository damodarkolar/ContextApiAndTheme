import {useContext} from "react";
import Button from "./Button";
import styled from "styled-components";
import { TheameContext } from "../context/TheameContext";
import Login from "./Login"
import { AuthContext } from "../context/AuthContext";
import * as React from 'react';
import Switch from '@mui/material/Switch';

const Container =styled.div`
border:2px solid red;
padding:${({theame})=>{return theame? "20px": "40px"}};
background-color:${({theame})=>{return theame? "black": "white"}};
margin:"50px"
`

 const Home=() => {
    
const { theame,HandleTheameChange }=useContext(TheameContext);
const { token }=useContext(AuthContext);
const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return(
        <>
        <label htmlFor="">Theme</label>
        <Switch onClick={HandleTheameChange}{...label} defaultChecked />
        {/* <Button></Button> */}
        <br/>
        <Container theame={theame}>
            <h2 style={theame? {color:"white",backgroundColor:"black"}: {color:"black",backgroundColor:"white"}}>{token?  (<h2>{"User Token Is : "+token}</h2>) : "User Not Loged In"}</h2>
        </Container>
        <Login></Login>    
        </>

    )
}


export default Home;