import React from "react";

function Pay_Method () {
    // Payment method buttons
    return(
        <>
            <label className="Header" htmlFor="payment_method">Payment Method:</label>
            <div>
                <button className="btn-green" type="button" id="payment_method_cash" name="payment_method">Cash</button>
                <button className="btn-green" type="button" id="payment_method_cash" name="payment_method">Card</button>
            </div>
        </>
    )
}
export default Pay_Method;