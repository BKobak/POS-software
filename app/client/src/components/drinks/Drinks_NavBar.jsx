import React from "react";
import { render } from "react-dom";
import { useState } from "react";
import Menu from "./Menu";
import { Axios } from "axios";


function Drinks_Nav() {

    const [activePage, setActivePage] = useState("Espresso");

    const handleClick = (page) => {
        setActivePage(page);
    };

    const [basket, setBasket] = useState([]);

    // Get espresso drinks from database
    const menuEspresso = () => {
        Axios.get("http://localhost:3001/espresso").then((response) => {
            console.log(response);
        });
    };

    // Get iced drinks from database
    const menuIced = () => {
        Axios.get("http://localhost:3001/iced").then((response) => {
            console.log(response);
        });
    };

    // Get brewed drinks from database
    const menuBrewed = () => {
        Axios.get("http://localhost:3001/brewed").then((response) => {
            console.log(response);
        });
    };

    // Get tea drinks from database
    const menuTea = () => {
        Axios.get("http://localhost:3001/tea").then((response) => {
            console.log(response);
        });
    };

    // Get other drinks from database   
    const menuOther = () => {
        Axios.get("http://localhost:3001/other").then((response) => {
            console.log(response);
        });
    };

    const Espresso = () => {
        render(
        <Menu menuItems={menuEspresso} basket={basket} setBasket={setBasket} />
        );
    };

    const Iced = () => {
        render(
        <Menu menuItems={menuIced} basket={basket} setBasket={setBasket} />
        );
    };

    const Brewed = () => {
        render(
        <Menu menuItems={menuBrewed} basket={basket} setBasket={setBasket} />
        );
    }

    const Tea = () => {
        render(
        <Menu menuItems={menuTea} basket={basket} setBasket={setBasket} />
        );
    }

    const Other = () => {
        render(
        <Menu menuItems={menuOther} basket={basket} setBasket={setBasket} />
        );
    }
    return(
        <div>
            <nav className="navbar">
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
                <li className={activePage === "Tea" ? "active" : ""} onClick={() => handleClick("Other")}>
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
            </section>
        </div>
    );
};


export default Drinks_Nav;