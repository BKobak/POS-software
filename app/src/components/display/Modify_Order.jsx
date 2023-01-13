import React from "react";

function Modify_Order() {
    return(
        <div>
                <input className="display-button search-btn" type="button" value="Search"/>
                <div>
                    {/* Checkbox for 'Iced' option */}
                    <label htmlFor='checkbox_iced'>
                        Iced
                    </label>
                    <input type="checkbox" value="" id='checkbox_iced'/>

                    {/* Checkbox for 'Decaf' option */}
                    <label htmlFor='checkbox_decaf'>
                        Decaf
                    </label>
                    <input type="checkbox" value="" id='checkbox_decaf'/>

                    <button className='display-button options-btn'>Milk</button>
                    <button className='display-button options-btn'>Syrup</button>
                    <button className='display-button options-btn'>Top...</button>
                    <button className='display-button options-btn'>Prep...</button>
                </div>
            </div>
)}
export default Modify_Order;