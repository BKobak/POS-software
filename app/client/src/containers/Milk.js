import React from "react";
import Axios from "axios";
function Milk() {
    const milk = Axios.get("http://localhost:3001/milk");
    return (
        <div className="clear">
            <h1>Milk</h1>
            <p>{milk}</p>
            

        </div>
    );
}
export default Milk;