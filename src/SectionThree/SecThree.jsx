import React from 'react'
import "./SecThree.scss";
import cake from "./../img/bakery/cupcake.png";

const SecThree = () => {
    return (
        <div className='SecThree-main'>
            <div className="SecThree-wrapper">
                <div className="SecThree-One">
                    <div className="secThree-One-one"></div>
                    <div className="secThree-One-two"></div>
                    <img src={cake} className='secThree-one-img' alt="" />
                </div>

                <div className="SecThree-Two">
                    <h1 className='secThree-two-tile'>Delicious Cup Cake</h1>
                    <p className='secThree-two-tile-two'>A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup.</p>

                    <div className="order-btn">
                        Order Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecThree