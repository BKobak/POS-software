import React from 'react'; // Import React and Component from react
import { useState } from 'react'; // Import useState from react

// Import components
import Espresso from './drinks/Espresso.js';
import Iced from './drinks/Iced.js';
import Brewed from './drinks/Brewed.js';
import Tea from './drinks/Tea.js';
import Other from './drinks/Other.js';
import AllDrinks from './drinks/allDrinks.js';

// Display Drinks page
function Drinks() {
    // Create state for active page
    const [activePage, setActivePage] = useState("Espresso");

    // Function to change active page
    const handleClick = (page) => {
        setActivePage(page);
    };

  return (
      <div className='clear'>
        <div>
            <nav className="small-navbar">
                <ul>
                <li className={activePage === "Espresso" ? "active" : ""} onClick={() => handleClick("Espresso")}>
                    Espresso
                </li>
                <li className={activePage === "Iced" ? "active" : ""} onClick={() => handleClick("Iced")}>
                    Iced
                </li>
                <li className={activePage === "Brewed" ? "active" : ""} onClick={() => handleClick("Brewed")}>
                    Brewed
                </li>
                <li className={activePage === "Tea" ? "active" : ""} onClick={() => handleClick("Tea")}>
                    Tea
                </li>
                <li className={activePage === "Other" ? "active" : ""} onClick={() => handleClick("Other")}>
                    Other
                </li>
                </ul>
            </nav>
            <section>
                {activePage === "Espresso" && <Espresso/>}
                {activePage === "Iced" && <Iced/>}
                {activePage === "Brewed" && <Brewed/>}
                {activePage === "Tea" && <Tea/>}
                {activePage === "Other" && <Other/>}
                {activePage === "allDrinks" && <AllDrinks/>}
            </section>
        </div>
      </div>
  );
};
export default Drinks; // Export the class