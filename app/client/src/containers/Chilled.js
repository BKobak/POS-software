import React, {useState} from "react";

// Import components
import Breakfast from "./chilled/Breakfast";
import Toasties from "./chilled/Toasties";
import Paninis from "./chilled/Paninis";
import Pots from "./chilled/Pots";
import AllChilled from "./chilled/allChilled";

function Chilled() {
    const [activePage, setActivePage] = useState("allChilled");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
      <div className='clear'>
        <div>
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
          {activePage === "allChilled" && (
            <div className="menu-columns">
              <AllChilled />
            </div>
          )}
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