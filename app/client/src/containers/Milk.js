import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import axios from 'axios';

function Milk() {
    
    const [menuItems, setMenuItems] = useState([axios.get('/milk')]);
    
  useEffect(() => {
    // Make a GET request to retrieve data from the Milk table
    axios.get('http://localhost:3001/milk')
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
}

export default Milk;
