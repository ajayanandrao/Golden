import React from 'react'
import "./SecFive.scss";
import donut from "./../img/bakery/doughnut.png";

const SecFive = () => {
    return (
        <div className='SecFive-main'>
            <div className="SecThree-wrapper">
                <div className="SecThree-One">
                    <div className="secThree-One-one"></div>
                    <div className="secThree-One-two"></div>
                    <img src={donut} className='secThree-one-img' alt="" />
                    <div className="secFive-circal">
                        <h1 className='secFive-circal-text'>Hot</h1>
                        <h className='secFive-circal-p'>Now</h>
                    </div>
                </div>  

                <div className="SecThree-Two">
                    <h1 className='secThree-two-tile'>Delightful Donuts</h1>
                    <p className='secThree-two-tile-two'>A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup.</p>

                    <div className="order-btn">
                        Order Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecFive