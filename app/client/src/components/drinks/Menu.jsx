import React from "react";

function Menu({ menuItems, basket, setBasket }) {
    return (
      <div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setBasket([...basket, item]);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }
export default Menu;