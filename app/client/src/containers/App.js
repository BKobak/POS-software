import '../assets/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AddUser from './AddUser';
import Pay from './Pay';
import Display from './Display';
import DrinksCont from './Drinks';
import DiscountCont from './Discount';

function App() {
  // Establish Routes.
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path="/display" element={<Display/>}/>

        <Route path="/discount" element={<DiscountCont/>}/>
        <Route path="/drinks" element={<DrinksCont/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;