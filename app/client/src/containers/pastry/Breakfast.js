import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import axios from 'axios';

function Breakfast() {
    const [menuItems, setMenuItems] = useState([axios.get('http://localhost:3001/breakfast_pastry')]);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/breakfast_pastry')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Menu menuItems={menuItems}/>
    </div>
  );
  };
export default Breakfast;