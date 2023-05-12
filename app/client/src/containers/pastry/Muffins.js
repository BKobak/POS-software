import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import axios from 'axios';

// Function to display display pastry items from category muffins
function Muffins() {
    const [menuItems, setMenuItems] = useState([]);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/muffins')
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
export default Muffins;