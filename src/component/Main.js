import React, { useState } from "react";
import Item from "./Item";
import Display from './Display';



const Main = () =>{
/*    const [arr, setArr]= useState([]);
    

    const deleteHanler = (id) =>{
        const Datade = arr.filter((data)=> data.id !== id);
        setArr(Datade);
    }*/
     
    
    return(
        <>
        <Item />
        <Display /> 
        </>
    );
}
export default Main;