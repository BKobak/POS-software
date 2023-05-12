import '../assets/App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import AddUser from './AddUser';
import Pay from './Pay';
import Display from './Display';
import DrinksCont from './Drinks';
import DiscountCont from './Discount';

import { AuthProvider } from '../context/AuthProvider';
import BasketContext from '../context/BasketContext';

// Display the app
function App() {
  const [basket, setBasket] = useState([]);
  return (
    <AuthProvider>
      <BasketContext.Provider value={{ basket, setBasket }}>
        {/* Establish routes. */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/addUser' element={<AddUser/>}/>
            <Route path='/pay' element={<Pay/>}/>
            <Route path="/display" element={<Display/>}/>
            <Route path="/discount" element={<DiscountCont/>}/>
            <Route path="/drinks" element={<DrinksCont/>}/>
            <Route path="/all" element={<allPastry/>}/>
          </Routes>
        </BrowserRouter>
      </BasketContext.Provider>
    </AuthProvider>
  );
}

export default App;