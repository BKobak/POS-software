import React, { useContext, useState } from "react";
import ToggleContext from "../../context/Toggle";
import Basket from "../../containers/Basket";

function Order_Window () {
    const [basket, setBasket] = useState([]);
    const { toggleValue, setToggleValue } = useContext(ToggleContext);

    const handleClick = () => {
        setToggleValue(!toggleValue);
        if (toggleValue === true) {
            console.log("Go");
        } else {
            console.log("Here");
        }
    };
    

  return(
    <div>
        {/* Toggle with "Here" and "Go" options */}
        <label className="switch">
            <input className="toggle" type="checkbox" checked={toggleValue} onChange={handleClick} />
            <span className="slider round"></span>
        </label>

        <h1 className='order-header'>Ordered Items</h1>
        <div className='ordered-items'>
            <Basket basket={basket} />
        </div>

        
    </div>
)}
export default Order_Window;
