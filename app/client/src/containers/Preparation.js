import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Basket from './Basket';
import axios from 'axios';

function Preparation() {
    
    const [menuItems, setMenuItems] = useState([axios.get('/preparation')]);
    const [basket, setBasket] = useState([]);
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('/preparation')
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

export default Preparation;
