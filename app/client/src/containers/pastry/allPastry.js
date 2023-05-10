import React from "react";

// Import components
import Breakfast from "./Breakfast";
import Cakes from "./Cakes";
import Cookies from "./Cookies";
import LoafCakes from "./LoafCakes";
import Muffins from "./Muffins";

function AllPastry() {
    return (
      <div className="menu-columns">
        <Breakfast/>
        <Cakes/>
        <Cookies/>
        <LoafCakes/>
        <Muffins/>
      </div>
    );
}
export default AllPastry;