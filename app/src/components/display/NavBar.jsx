import React from "react";

function NavBar () {
    return(
      <div>
        <nav>
          <ul className="list-item">
            <li><a href="#drinks">Drinks</a></li>
            <li><a href="#pastry">Pastry</a></li>
            <li><a href="#chilled">Chilled</a></li>
            <li><a href="#others">Others</a></li>
          </ul>
        </nav>
      </div>
    )
}
export default NavBar;