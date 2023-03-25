import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Basket from './Basket';
import axios from 'axios';

function Syrup() {
    
    const [menuItems, setMenuItems] = useState([axios.get('/syrup')]);
    const [basket, setBasket] = useState([]);
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('/syrup')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Menu menuItems={menuItems} basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default Syrup;
