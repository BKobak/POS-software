import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import axios from 'axios';

function Other() {
    const [menuItems, setMenuItems] = useState([axios.get('http://localhost:3001/other')]);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/other')
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
  export default Other;