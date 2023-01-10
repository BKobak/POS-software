import React from 'react';

function Display () {
  return(
    <div className='display-bg'>
        <section className='order-summary'>
            {/* Toggle with "Here" and "Go" options */}
            <label className="switch">
                <input className="toggle" type="checkbox" />
                <span className="slider round"></span>
            </label>

            <h1 className='order-header'>Ordered Items</h1>
            <div className='ordered-items'>

            </div>

            {/* Buttons linked to Discount and Pay pages */}
            <div>
                <div className='inline-btn'>
                    <input className="display-button" type="button" value="Discount"/>
                </div>
                <div className='inline-btn'>
                    <input className="display-button" type="button" value="Pay"/>
                </div>
            </div>
        </section>
            
        <section className='modify-order'>
            <h3 className='order-header'>Hello</h3>
            <div>
                
            </div>

        </section>
        
        <section>
            
        </section>

        <section>

        </section>
    </div>
  )
}

export default Display;