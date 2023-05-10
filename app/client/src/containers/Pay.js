import React, {useRef} from "react";
import Keyboard from "../components/pay/keyboard";
import Pay_Method from "../components/pay/payment_method";
import Receipt from "../components/pay/receipt";

function Pay(){

    const componentRef = useRef(null);

    const handlePrint = () => {
        const content = componentRef.current.innerHTML;
        const printWindow = window.open('', 'Print', 'height=600,width=800');
        printWindow.document.write(<Receipt/>);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
    
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
                            <button className="btn-green" id="print_receipt" onclick={handlePrint}>Print Receipt</button>
                            <div style={{ position: 'absolute', left: '-9999px' }}>
                                <div ref={componentRef}>
                                    <Receipt/>
                                </div>
                            </div>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    );
}
export default Pay;