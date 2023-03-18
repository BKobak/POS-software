import React from "react";
import Keyboard from "../components/pay/keyboard";
import Pay_Method from "../components/pay/payment_method";

function Pay(){
    
    return(
        <div>
            <div className="pay-container">
                <div className="form">
                    <form>
                        {/* Select object to choose payment method */}
                        <div>
                            <Pay_Method/>
                        </div>
                        {/* Keyboard to enter cash received */}
                        <div>
                            <Keyboard/>
                        </div>
                        <div className="btn-onRight">
                            <button className="btn-green" type="submit">Submit</button>
                            <button className="btn-green" id="print_receipt" /*onclick={window.print()}*/>Print Receipt</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    );
}
export default Pay;