import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import axios from 'axios';

// Function to display items from category topping
function Topping() {
    // Declare new state variables menuItems and basket
    const [menuItems, setMenuItems] = useState([axios.get('/topping')]);
    const [basket, setBasket] = useState([]);
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/topping')
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
