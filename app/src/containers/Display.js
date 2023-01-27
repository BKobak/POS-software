import React, { Component } from 'react'; // Import React and Component from react
// Import styles sheet
import '../assets/css/display.css';

import Order_Window from '../components/display/Order_Window.jsx';
import Modify_Order from '../components/display/Modify_Order.jsx';
import NavBar from '../components/display/NavBar.jsx';
import DrinksCont from './Drinks.js';

class DisplayCont extends Component {
  render() {  // Render a div with the Display component
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


        <section id="drinks" className='menu-section clear'>
          <DrinksCont/>
        </section>
        <section id="pastry" className='menu-section clear'>
          <h1>Pastry</h1>
        </section>
        <section id="chilled" className='menu-section clear'>
          <h1>Chilled</h1>
        </section>
        <section id="others" className='menu-section clear'>
          <h1>Others</h1>
        </section>
    </div>
    );
  }
}

export default DisplayCont;   // Export the class