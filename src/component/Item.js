import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid} from 'uuid';
import { AddData } from "./action/index";

const Item = () =>{
    const [ name, setName] = useState("");
    const [add, setAdd] = useState("");
    const [price, setPrice] = useState("");
    //const [input, setInput] = useState([]);
    const _id = uuid();
    const dispatch = useDispatch();

 
       

const submitHandler = (e) =>{
    e.preventDefault();
    const inputVal ={
            id:_id,
            name:name,
            add: add,
            price:price
        }
        dispatch(AddData(inputVal));
        //setInput([...input,inputVal]);
        //data([...input,inputVal]);
        setName('');
        setAdd("");
        setPrice('');
    }
    return(
        <>
        <div className="container m-5">
            <form onSubmit={submitHandler}>
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