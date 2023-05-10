import React from "react";

// Import components
import Brewed from "./Brewed";
import Espresso from "./Espresso";
import Iced from "./Iced";
import Other from "./Other";
import Tea from "./Tea";

function AllDrinks() {
    return (
      <div className="menu-columns">
        <table >
          <tbody>
            <tr>
              <td>
                <Brewed/>
              </td>
              <td>
                <Espresso/>
              </td>
              <td>
                <Iced/>
              </td>
              <td>
                <Other/>
              </td>
              <td>
                <Tea/>
              </td>
            </tr>
          </tbody>
        </table>
        
        {/*
        <Iced/>
        <Other/>
        <Tea/>*/}
      </div>
    );
}
export default AllDrinks;