/*import React from "react";

const Edit =() =>{
    
    return(
        <>
        <div className="container m-5">
            <h2>Edit Page</h2> 
            <form >
            <input className="from-control m-2" type='text' />
            <input className="from-control m-2" type='text' />
            <input className="from-control m-2" type='text' />
            <input className="btn btn-success m-2" type='submit' />
            </form>
        </div>
        
        </>
    )
}

export default Edit; */
import React, {useState } from "react";
import { v4 as uuid} from 'uuid';

const Item = ({data}) =>{
    const [ name, setName] = useState("");
    const [add, setAdd] = useState("");
    const [price, setPrice] = useState("");
    //const [input, setInput] = useState([]);
    const _id = uuid();

 
       

/*const submitHandler = (e) =>{
    e.preventDefault();
    const inputVal ={
            id:_id,
            name:name,
            add: add,
            price:price
        }
        setInput([inputVal]);
        //data([...input,inputVal]);
        setName('');
        setAdd("");
        setPrice('');
    }*/
    return(
        <>
        <div className="container m-5">
            <form /*onSubmit={submitHandler}*/ onSubmit={()=>{}} >
            <input className="from-control m-2" type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input className="from-control m-2" type='text' value={add} onChange={(e)=>{setAdd(e.target.value)}}/>
            <input className="from-control m-2" type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <input className="btn btn-success m-2" type='submit' />
            </form>
        </div>
        
        </>
    )
}
export default Item; 
