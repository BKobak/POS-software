import React from 'react'; // Import React and Component from react

import Drinks_Nav from '../components/drinks/Drinks_NavBar.jsx';

function Drinks() { // Create a class called Drinks that extends Component
  return (
      <div className='clear'>
        <Drinks_Nav/>
      </div>
  );
};
export default Drinks; // Export the class