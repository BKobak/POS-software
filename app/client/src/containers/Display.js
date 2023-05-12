import React, {useState} from 'react'; // Import React and Component from react
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import ToggleContext from '../context/Toggle.js'; // Import ToggleContext from Toggle.js
import Order_Window from '../components/display/Order_Window.jsx';
import DiscountCont from './Discount.js';
import Pay from './Pay.js';
import Drinks from './Drinks.js';
import Chilled from './Chilled.js'
import Pastry from './Pastry.js'
import Other from './Other.js'
import Milk from './Milk.js'
import Syrup from './Syrup.js'
import Topping from './Topping.js'
import Preparation from './Preparation.js';

function Display() {
  const [toggleValue, setToggleValue] = useState(false);
  
  const [activePage, setActivePage] = useState("Drink");
  const handleClick = (page) => {
    setActivePage(page);
  };

  // Define navigate function
  const navigate = useNavigate();

  // Button to submit order
  function LogOut() {
      navigate('/');
  };

  return (
      <div className='dark-bg'>
        <section className='order-summary clear'>
          <ToggleContext.Provider value={{ toggleValue, setToggleValue }}>
            <Order_Window/>
          </ToggleContext.Provider>
          
          {/* Buttons linked to Discount and Pay pages */}
          <div>
              <div className='inline-btn'>
                  <input className={activePage === "Discount" ? "btn-green pay-btn" : "btn-green pay-btn"} onClick={() => handleClick("Discount")} type="button" value="Discount"/>
              </div>
              <div className='inline-btn'>
                  <input className={activePage === "Pay" ? "btn-green pay-btn" : "btn-green pay-btn"} onClick={() => handleClick("Pay")} type="button" value="Pay"/>
              </div>
          </div>
          <div>
              <div className='inline-btn'>
                  <input className="btn-green mod-btn" type="button" value="Copy"/>
              </div>
              <div className='inline-btn'>
                  <input className="btn-green mod-btn" type="button" value="Delete"/>
              </div>
          </div>
        </section>
            
        <section className='modify-window clear'>
          <button className="btn-green search-btn" onClick={LogOut}>Close</button>
          <div>
            <select className="select">
              <option value="1=small">small</option>
              <option selected value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
                <div>
                    {/* Checkbox for 'Iced' option */}
                    <label className="centered small-top-margin" htmlFor='checkbox_iced'>
                        Iced
                    </label>
                    <input className="check" type="checkbox" value="" id='checkbox_iced'/>

                    {/* Checkbox for 'Decaf' option */}
                    <label className="centered" htmlFor='checkbox_decaf'>
                        Decaf
                    </label>
                    <input className="check" type="checkbox" value="" id='checkbox_decaf'/>

                    <button className={activePage === "Milk" ? "display-button options-btn centered" : "display-button options-btn centered"} onClick={() => handleClick("Milk")}>Milk</button>
                    <button className={activePage === "Syrup" ? "display-button options-btn centered" : "display-button options-btn centered"} onClick={() => handleClick("Syrup")}>Syrup</button>
                    <button className={activePage === "Topping" ? "display-button options-btn centered" : "display-button options-btn centered"} onClick={() => handleClick("Topping")}>Top...</button>
                    <button className={activePage === "Preparation" ? "display-button options-btn centered" : "display-button options-btn centered"} onClick={() => handleClick("Preparation")}>Prep...</button>
                </div>
        </section>
        
        <section className='categories-section clear'>
          <nav className="navbar">
            <ul>
              <li className={activePage === "Drink" ? "active" : ""} onClick={() => handleClick("Drink")}>
                Drink
              </li>
              <li className={activePage === "Pastry" ? "active" : ""} onClick={() => handleClick("Pastry")}>
                Pastry
              </li>
              <li className={activePage === "Chilled" ? "active" : ""} onClick={() => handleClick("Chilled")}>
                Chilled
              </li>
              <li className={activePage === "Other" ? "active" : ""} onClick={() => handleClick("Other")}>
                Other
              </li>
            </ul>
          </nav>

          <section className='display-margin'>
            {activePage === "Drink" && <Drinks/>}
            {activePage === "Pastry" && <Pastry/>}
            {activePage === "Chilled" && <Chilled/>}
            {activePage === "Other" && <Other/>}
            {activePage === "Discount" && <DiscountCont/>}
            {activePage === "Pay" && <Pay/>}
            {activePage === "Milk" && <Milk/>}
            {activePage === "Syrup" && <Syrup/>}
            {activePage === "Topping" && <Topping/>}
            {activePage === "Preparation" && <Preparation/>}
          </section>
        </section>
    </div>
  );
}

export default Display;   // Export the class