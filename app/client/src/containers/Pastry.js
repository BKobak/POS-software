import React, {useState} from "react";

// Import components
import Breakfast from "./pastry/Breakfast";
import Cakes from "./pastry/Cakes";
import Cookies from "./pastry/Cookies";
import LoafCakes from "./pastry/LoafCakes";
import Muffins from "./pastry/Muffins";
import AllPastry from "./pastry/allPastry";

function Pastry() {
  const [activePage, setActivePage] = useState("Muffins");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    // Create navigation bar and section for each page
      <div className='clear'>
        <div>
            <nav className="small-navbar">
                <ul>
                    <li className={activePage === "Muffins" ? "active" : ""} onClick={() => handleClick("Muffins")}>
                        Muffins
                    </li>
                    <li className={activePage === "Loaf Cakes" ? "active" : ""} onClick={() => handleClick("Loaf Cakes")}>
                        Loaf Cakes
                    </li>
                    <li className={activePage === "Cakes" ? "active" : ""} onClick={() => handleClick("Cakes")}>
                        Cakes
                    </li>
                    <li className={activePage === "Cookies" ? "active" : ""} onClick={() => handleClick("Cookies")}>
                        Cookies
                    </li>
                    <li className={activePage === "Breakfast" ? "active" : ""} onClick={() => handleClick("Breakfast")}>
                        Breakfast
                    </li>
                </ul>
            </nav>
            <section>
                {activePage === "Muffins" && <Muffins/>}
                {activePage === "Loaf Cakes" && <LoafCakes/>}
                {activePage === "Cakes" && <Cakes/>}
                {activePage === "Cookies" && <Cookies/>}
                {activePage === "Breakfast" && <Breakfast/>}
                {activePage === "allPastry" && <AllPastry/>}
            </section>
        </div>
      </div>
  );
}
export default Pastry;