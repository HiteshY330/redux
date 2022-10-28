
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route} from 'react-router-dom';
import Main from './component/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Edit from './component/Edit';
import { useState } from 'react';
import Cart from './component/Cart';


function App() {
  const [data, setData] = useState([]);
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main setData={setData}/>} />
      <Route path='/edit/:id' element={<Edit data={data} />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
