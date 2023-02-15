import React from "react";
import { useNavigate } from "react-router-dom";

function Modify_Order() {

    // Define navigate function
    const navigate = useNavigate();

    // Button to submit order
    function Submit_Btn() {
        navigate('/');
    };

    return(
        <div>
                <button className="btn-green search-btn" onClick={Submit_Btn}>Search</button>
                <div>
                    {/* Checkbox for 'Iced' option */}
                    <label className="centered small-top-margin" htmlFor='checkbox_iced'>
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