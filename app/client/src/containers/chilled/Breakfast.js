import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import axios from 'axios';

// Function to display chilled items from category breakfast
function Breakfast() {
    const [menuItems, setMenuItems] = useState([]);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/breakfast_chilled')
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