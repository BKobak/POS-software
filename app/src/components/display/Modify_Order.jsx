import React from "react";

function Modify_Order() {
    return(
        <div>
                <input className="display-button search-btn" type="button" value="Search"/>
                <div>
                    {/* Checkbox for 'Iced' option */}
                    <label className="centered" htmlFor='checkbox_iced'>
                        Iced
                    </label>
                    <input className="check" type="checkbox" value="" id='checkbox_iced'/>

                    {/* Checkbox for 'Decaf' option */}
                    <label className="centered" htmlFor='checkbox_decaf'>
                        Decaf
                    </label>
                    <input className="check" type="checkbox" value="" id='checkbox_decaf'/>

                    <button className='display-button options-btn centered'>Milk</button>
                    <button className='display-button options-btn centered'>Syrup</button>
                    <button className='display-button options-btn centered'>Top...</button>
                    <button className='display-button options-btn centered'>Prep...</button>
                </div>
            </div>
)}
export default Modify_Order;