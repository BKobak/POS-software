import React from "react";

// Import components
import Brewed from "./Brewed";
import Espresso from "./Espresso";
import Iced from "./Iced";
import Other from "./Other";
import Tea from "./Tea";

// Function to display all drinks
function AllDrinks() {
    return (
      <div className="menu-columns">
        <table >
          <tbody>
            <tr>
              <td>
                <Espresso/>
              </td>
              <td>
                <Iced/>
              </td>            
              <td>
                <Tea/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
export default AllDrinks;