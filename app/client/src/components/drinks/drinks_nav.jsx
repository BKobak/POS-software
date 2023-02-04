import React from "react";
import { render } from "react-dom";

function Drinks_Nav () {
    return(
        <div>
            <nav>
                <ul className="list-item undernav">
                    <li><a href="#espresso">Espresso</a></li>
                    <li><a href="#frappucino">Frappucino</a></li>
                    <li><a href="#brewed">Brewed</a></li>
                    <li><a href="#tea">Tea</a></li>
                    <li><a href="#others">Others</a></li>
                </ul>
            </nav>

            <section id="espresso">
                <h1>Espresso</h1>
            </section>
            <section id="frappucino">
                <h1>Frappucino</h1>
            </section>
            <section id="brewed">
                <h1>Brewed</h1>
            </section>
            <section id="tea">
                <h1>Tea</h1>
            </section>
            <section id="others">
                <h1>Others</h1>
            </section>
        </div>
    )
}
export default Drinks_Nav;