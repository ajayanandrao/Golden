import React from 'react'
import "./SecSix.scss";
import { FaCakeCandles } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";

const SecSix = () => {
    return (
        <div className='SecSix-main'>
            <div className="SecThree-wrapper">
                <div className="SecThree-One">
                    <h1>Want Custom Order?</h1>
                    <h5>Order now for any accasion</h5>
                </div>

                <div className="SecThree-Two">
                    <div className="secThree-card-one">
                        <FaCakeCandles className='secThree-card-icon' />
                        <h1 className='secThree-title'>Birthday</h1>
                        <div className="order-btn">Order Now</div>
                    </div>
                    <div className="secThree-card-two">
                        <GiPartyPopper className='secThree-card-icon' />
                        <h1 className='secThree-title'>Party</h1>
                        <div className="order-btn">Order Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecSix