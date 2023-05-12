import React, { useContext } from 'react';
import BasketContext from  '../context/BasketContext';

// Function to display menu items as the buttons
function Menu({ menuItems, basket }) {
  const { setBasket } = useContext(BasketContext);

  return (
    <div>
      <div className="menu-container">
        <div className="menu-grid">
          {menuItems.map((item) => (
            <button className="display-btn"
              key={item.name}
              onClick={() => {
                setBasket([...basket, item]);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
