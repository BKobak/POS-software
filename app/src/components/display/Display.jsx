import React from 'react';

function Display () {
  return(
    <div>
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
                <div className="discount-button display-button">
                    <input type="button" value="Discount"/>
                </div>
                <div className="pay-button display-button">
                    <input type="button" value="Pay"/>
                </div>
            </div>
        </section>

        <section className='modify-order'>
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