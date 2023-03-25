import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Basket from './Basket';
import axios from 'axios';

function Topping() {
    
    const [menuItems, setMenuItems] = useState([axios.get('/topping')]);
    const [basket, setBasket] = useState([]);
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('/topping')
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

export default Topping;
