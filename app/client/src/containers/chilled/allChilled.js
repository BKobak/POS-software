import React from "react";

// Import components
import Breakfast from "./Breakfast";
import Paninis from "./Paninis";
import Pots from "./Pots";
import Toasties from "./Toasties";

function AllChilled() {
    return (
      <div className="menu-columns">
        <Breakfast/>
        <Paninis/>
        <Pots/>
        <Toasties/>
      </div>
    );
}
export default AllChilled;