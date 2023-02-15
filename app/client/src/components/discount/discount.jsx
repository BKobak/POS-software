import React from "react";

function Discount(){
    
    const PartnerFreeMeal = () => {
        console.log("Partner Free Meal");
    };

    const PartnerFreeDrink = () => {
        console.log("Partner Free Drink");
    };

    const PartnerFood30 = () => {
        console.log("Partner Food 30%");
    };

    const PartnerFood50 = () => {
        console.log("Partner Food 50%");
    };

    const BlueLightCard = () => {
        console.log("Blue Light Card");
    };

    const SurpriseDelight = () => {
        console.log("Surprise and Delight");
    };
    
    return(
        <div>
            <h1 className="Header centered top-margin">Discounts</h1>

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
