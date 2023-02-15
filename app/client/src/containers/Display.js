import React from 'react'; // Import React and Component from react

import Order_Window from '../components/display/Order_Window.jsx';
import Modify_Order from '../components/display/Modify_Order.jsx';
import NavBar from '../components/display/NavBar.jsx';


function Display() { // Create a class called Drinks that extends Component
  return (
      <div className='dark-bg'>
        <section className='order-summary clear'>
            <Order_Window/>
        </section>
            
        <section className='modify-window clear'>
            <Modify_Order/>
        </section>
        
        <section className='categories-section clear'>
            <NavBar/>
        </section>
    </div>
  );
}

export default Display;   // Export the class