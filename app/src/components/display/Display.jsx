import React from 'react';
import Order_Window from './Order_Window.jsx';
import Modify_Order from './Modify_Order.jsx';

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
            
        </section>

        <section className='menu-section clear'>

        </section>
    </div>
  )
}

export default Display;