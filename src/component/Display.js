import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, AddCart } from "./action";

//import { Link } from 'react-router-dom';
//const Item = ({dataa, del}) => {
const Item = () => {

    //const [search, setSearch] = useState();
    const dispatch= useDispatch();
    const Data = useSelector((state)=>state.AddReducer.AddData)
   
  return (
    <>
     <div className="container m-5">
     { /* <input
              type="text"
              placeholder="search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />*/}
           
        <table>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Address</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
         {Data.map((dis, i) => {
              return (
                <tr key={i}>
                  <td> {1+i}</td>
                  <td> {dis.name} </td>
                  <td> {dis.add} </td>
                  <td> {dis.price} </td>
                  <td>
                    <button onClick={()=> dispatch(Delete(dis))} >Delete</button>
                  </td>

                  <td>
                    <button onClick={()=> { const cart = {count:1, id:dis.id, name:dis.name, add:dis.add, price:dis.price};
                     dispatch(AddCart(cart))}} >Add</button>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Item;
