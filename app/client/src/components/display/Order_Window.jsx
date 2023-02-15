import React from 'react';
import { useNavigate } from 'react-router';

import Basket from './Basket';

function Order_Window () {
    const navigate = useNavigate();
    const ToPay = () => {
        navigate('/pay');
    };
    const ToDiscount = () => {
        navigate('/discount');
    };

  return(
    <div>
        {/* Toggle with "Here" and "Go" options */}
        <label className="switch">
            <input className="toggle" type="checkbox" />
            <span className="slider round"></span>
        </label>

        <h1 className='order-header'>Ordered Items</h1>
        <div className='ordered-items'>
            {/*<Basket basket={basket} />1*/}
        </div>

        {/* Buttons linked to Discount and Pay pages */}
        <div>
            <div className='inline-btn'>
                <input onClick={ToDiscount} className="btn-green pay-btn" type="button" value="Discount"/>
            </div>
            <div className='inline-btn'>
                <input onClick={ToPay} className="btn-green pay-btn" type="button" value="Pay"/>
            </div>
        </div>
    </div>
)}
export default Order_Window;