import React from "react";
import { useSelector } from "react-redux";

const Cart = () =>{
    const CartData= useSelector((state)=>state.AddReducer.AddCart);
    return(
        <>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>sr.no</th>
                    <th>name</th>
                    <th>Add</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CartData.map((item,i)=>{
                            return(
                                <>
                                <tr key={i}>
                                    <td> {i+1} </td>
                                    <td> {item.name} </td>
                                </tr>
                                </>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Cart;