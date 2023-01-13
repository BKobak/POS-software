import React from 'react';

function Order_Window () {
  return(
    <div>
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
                <input className="display-button pay-btn" type="button" value="Discount"/>
            </div>
            <div className='inline-btn'>
                <input className="display-button pay-btn" type="button" value="Pay"/>
            </div>
        </div>
    </div>
)}
export default Order_Window;