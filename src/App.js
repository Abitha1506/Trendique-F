import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import Shop from './Shop';
import Home from './Home';
import Signup from './Signup';

export const datacontext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <datacontext.Provider value={{ cart, setCart }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </datacontext.Provider>   
  );
}

export default App;
