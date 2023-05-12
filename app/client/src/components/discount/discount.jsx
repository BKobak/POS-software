import React from "react";

function Discount(){
    
    // Function to handle the Partner Free Meal button
    const PartnerFreeMeal = () => {
        console.log("Partner Free Meal");
    };

    // Function to handle the Partner Free Drink button
    const PartnerFreeDrink = () => {
        console.log("Partner Free Drink");
    };

    // Function to handle the Partner Food 30% button
    const PartnerFood30 = () => {
        console.log("Partner Food 30%");
    };

    // Function to handle the Partner Food 50% button
    const PartnerFood50 = () => {
        console.log("Partner Food 50%");
    };

    // Function to handle the Blue Light Card button
    const BlueLightCard = () => {
        console.log("Blue Light Card");
    };

    // Function to handle the Surprise and Delight button
    const SurpriseDelight = () => {
        console.log("Surprise and Delight");
    };
    
    return(
        <div>
            <h1 className="Header centered top-margin">Discounts</h1>

            {/* Buttons to display the different discounts */}
            <div>
                <div className="row centered">
                    <div className="col">
                        <button className="btn-green" onClick={PartnerFreeMeal}>Partner Free Meal</button>
                        <button className="btn-green" onClick={PartnerFreeDrink}>Partner Free Drink</button>
                    </div>
                    <div className="col">
                        <button className="btn-green" onClick={PartnerFood30}>Partner Food 30%</button>
                        <button className="btn-green" onClick={PartnerFood50}>Partner Food 50%</button>
                    </div>
                    <div className="col">
                        <button className="btn-green" onClick={BlueLightCard}>Blue Light Card</button>
                        <button className="btn-green" onClick={SurpriseDelight}>Surprise and Delight</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Discount;
