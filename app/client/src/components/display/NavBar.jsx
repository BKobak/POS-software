import React, { useState } from "react";


function Navbar(){
  const [activePage, setActivePage] = useState("Drink");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
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
      <section>
        {activePage === "Drink" && <Drink/>}
        {activePage === "Pastry" && <Pastry/>}
        {activePage === "Chilled" && <Chilled/>}
        {activePage === "Other" && <Other/>}
      </section>
    </div>
  );
};

const Drink = () => (
  <div>
    <h1>Drink</h1>
  </div>
);

const Pastry = () => (
  <div>
    <h1>Pastry</h1>
    <p>Pastry</p>
  </div>
);


const Chilled = () => (
  <div>
    <h1>Chilled</h1>
    <p>Chilled</p>
  </div>
);

const Other = () => (
  <div>
    <h1>Other</h1>
    <p>Other</p>
  </div>
);


export default Navbar;
