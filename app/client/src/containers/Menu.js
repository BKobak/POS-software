import React, { useContext } from 'react';
import BasketContext from  '../context/BasketContext';

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


/*
function Menu({ menuItems, basket, setBasket }) {
    return (
        <div>
            <div className="menu-container">
                <div className="menu-grid">
                    {menuItems.map((item) => (
                        <button className="display-btn"
                            key={item.id}
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
};
export default Menu;
*/