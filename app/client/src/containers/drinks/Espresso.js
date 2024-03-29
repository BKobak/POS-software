import React, { useState, useEffect, useContext } from 'react';
import Menu from '../Menu';
import axios from 'axios';
import BasketContext from '../../context/BasketContext';

// Function to display display items from category espresso
function Espresso() {
    const [menuItems, setMenuItems] = useState([]);
    const { basket, setBasket } = useContext(BasketContext);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/espresso')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Menu menuItems={menuItems} basket={basket} />
    </div>
  );
  };
  export default Espresso;