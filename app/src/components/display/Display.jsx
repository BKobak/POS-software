import React from 'react';
import Order_Window from './Order_Window.jsx';
import Modify_Order from './Modify_Order.jsx';
import NavBar from './NavBar.jsx';

import DrinksCont from '../../containers/Drinks.js';

function Display () {
  return(
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
  )
}

export default Display;