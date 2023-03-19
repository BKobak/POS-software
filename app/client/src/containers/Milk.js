import React from "react";
import Axios from "axios";
function Milk() {
    const milk = Axios.get("http://localhost:3001/milk");
    console.log(milk);
    return (
        <div className="clear">
            <h1>Milk</h1>
            <div>
                
            </div>
            

        </div>
    );
}
export default Milk;