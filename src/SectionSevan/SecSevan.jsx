import React from 'react'
import "./SecSevan.scss";
import cake from "./../img/bakery/cupcake.png";

const SecSevan = () => {
    return (
        <div className='Sevan-main'>
            <div className="SecThree-wrapper">
                <div className="SecThree-One-div">
                    <h2 className='SecThree-one-text'>The Best Beauty Products</h2>
                    <p className='SecThree-title-two'>Beyond physical health, cosmetics can help to improvee our mood. enhance our appearance and boost our self-esteem.</p>
                    <div className="SecThree-One">
                        <div className="secThree-One-one"></div>
                        <div className="secThree-One-two"></div>
                        <img src={cake} className='secThree-one-img' alt="" />
                    </div>
                </div>

                <div className="SecThree-Two">
                    <h1 className='secThree-two-tile'>Contact with us</h1>
                    <input type="text" placeholder='Enter Your Name' className='form-input' />
                    <input type="text" placeholder='Product Id' className='form-input' />
                    <input type="text" placeholder='Phone' className='form-input' />
                    <input type="text" placeholder='Email' className='form-input' />
                    <div className="order-btn-div">
                        <div className="order-btn">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecSevan