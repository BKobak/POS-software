import React, {useState} from "react";

function Keyboard(){
    const [cashReceived, setCashReceived] = useState("");

    const handleClick = (event) => {
        event.preventDefault(''); // Prevents the page from refreshing.

        const value = event.target.innerHTML;
  
        if (value === "c") {
            setCashReceived("");
        } else {
            setCashReceived((prevValue) => prevValue + value);
        }
    };
    
    return(
        <div>
            <div className="add-user-form">
                <label className="Header" htmlFor="cash_received">Cash Received:</label>
                <input
                className="small-input add-user-input-field"
                type="text"
                id="cash_received"
                name="cash_received"
                value={cashReceived}
                onChange={(e) => setCashReceived(e.target.value)}
                />
            </div>
            
            <div className="keyboard">
                <div className="row">
                    <button className="keyboard-button" type="button" onClick={handleClick}>1</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>2</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>3</button>
                </div>
                <div className="row">
                    <button className="keyboard-button" type="button" onClick={handleClick}>4</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>5</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>6</button>
                </div>
                <div className="row">
                    <button className="keyboard-button" type="button" onClick={handleClick}>7</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>8</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>9</button>
                </div>
                <div className="row">
                    <button className="keyboard-button" type="button" onClick={handleClick}>.</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>0</button>
                    <button className="keyboard-button" type="button" onClick={handleClick}>c</button>
                </div>
            </div>
        </div>
    );
};
export default Keyboard;