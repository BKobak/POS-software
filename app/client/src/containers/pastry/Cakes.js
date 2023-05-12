import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import axios from 'axios';

// Function to display display pastry items from category cakes
function Cakes() {
    const [menuItems, setMenuItems] = useState([]);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/cakes')
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
export default Cakes;