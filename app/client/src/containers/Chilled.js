import React, {useState} from "react";

// Import components
import Breakfast from "./chilled/Breakfast";
import Toasties from "./chilled/Toasties";
import Paninis from "./chilled/Paninis";
import Pots from "./chilled/Pots";
import AllChilled from "./chilled/allChilled";

// Function to display chilled items
function Chilled() {
    const [activePage, setActivePage] = useState("Breakfast");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
      <div className='clear'>
        <div>
            {/* Create navigation bar and section for each page */}
            <nav className="small-navbar">
                <ul>
                <li className={activePage === "Breakfast" ? "active" : ""} onClick={() => handleClick("Breakfast")}>
                    Breakfast
                </li>
                <li className={activePage === "Toasties" ? "active" : ""} onClick={() => handleClick("Toasties")}>
                    Toasties
                </li>
                <li className={activePage === "Paninis" ? "active" : ""} onClick={() => handleClick("Paninis")}>
                    Paninis
                </li>
                <li className={activePage === "Pots" ? "active" : ""} onClick={() => handleClick("Pots")}>
                    Pots
                </li>
                </ul>
            </nav>
            <section>
          {/* If active page is "allChilled" display page AllChilled */}
          {activePage === "allChilled" && (
            <div className="menu-columns">
              <AllChilled />
            </div>
          )}
          {/* If active page is not "allChilled" display page for active page */}
          {activePage !== "allChilled" && (
            <>
              {activePage === "Breakfast" && <Breakfast />}
              {activePage === "Toasties" && <Toasties />}
              {activePage === "Paninis" && <Paninis />}
              {activePage === "Pots" && <Pots />}
            </>
          )}
        </section>
        </div>
      </div>
  );
};
export default Chilled;