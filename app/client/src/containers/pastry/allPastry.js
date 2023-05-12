import React from "react";

// Import components
import Breakfast from "./Breakfast";
import Cakes from "./Cakes";
import Cookies from "./Cookies";
import LoafCakes from "./LoafCakes";
import Muffins from "./Muffins";

// Display all pastry items
function AllPastry() {
    return (
      <div className="menu-columns">
        <Breakfast/>
        <Cakes/>
        <Cookies/>
        <Muffins/>
      </div>
    );
}
export default AllPastry;