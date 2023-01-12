import React from 'react';

function Display () {
  return(
    <div className='dark-bg'>
        <section className='order-summary clear'>
            {/* Toggle with "Here" and "Go" options */}
            <label className="switch">
                <input className="toggle" type="checkbox" />
                <span className="slider round"></span>
            </label>

            <h1 className='order-header'>Ordered Items</h1>
            <div className='ordered-items'>

            </div>

            {/* Buttons linked to Discount and Pay pages */}
            <div>
                <div className='inline-btn'>
                    <input className="display-button pay-btn" type="button" value="Discount"/>
                </div>
                <div className='inline-btn'>
                    <input className="display-button pay-btn" type="button" value="Pay"/>
                </div>
            </div>
        </section>
            
        <section className='modify-window clear'>
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

        </section>
        
        <section className='clear'>
            
        </section>

        <section className='clear'>

        </section>
    </div>
  )
}

export default Display;