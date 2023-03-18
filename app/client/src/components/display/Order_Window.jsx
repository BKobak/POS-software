import React, { useState } from "react";

function Order_Window () {
    const [activePage, setActivePage] = useState("Drink");

    const handleClick = (page) => {
      setActivePage(page);
    };

  return(
    <div>
        {/* Toggle with "Here" and "Go" options */}
        <label className="switch">
            <input className="toggle" type="checkbox" />
            <span className="slider round"></span>
        </label>

        <h1 className='order-header'>Ordered Items</h1>
        <div className='ordered-items'>
            {/*<Basket basket={basket} />1*/}
        </div>

        
    </div>
)}
export default Order_Window;