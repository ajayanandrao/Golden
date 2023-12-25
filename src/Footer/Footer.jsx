import React from 'react'
import "./Footer.scss"
import donut from "./../img/bakery/cheesD.png"

const Footer = () => {
    return (
        <>
            <div className='f-main'>
                <img src={donut} className='donut' alt="" />
                <div className="f-text-div">
                    <div className='f-one-div'>
                        <h1>Join With Us</h1>
                        <p className='f-text-two'>Beyound physical health, cosmetic can help to improve our mood, enhance our appearance.</p>
                    </div>

                    <div className="input-filed">
                        <input type="text" className='input-footer' placeholder='Enter your hone email' />
                        <div className="submit-btn">Subsribe</div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-div">
                <div className="footer-b-one-div">
                    <div className="footer-b-one-wrapper">

                        <div className="footer-b-item" style={{ padding: "0px" }}>
                            <h1>Bakery</h1>
                            <p>A bakery is on establishmenst that produces and self floorbased food baked in on oven such as bread, cookies, cokes, doughnuts, bogels, pastries, and pies.</p>

                            <div>
                                <span>32 arlington street, baston,MA 02116</span>
                                <span>Call:888-999-00000</span>
                                <span>Email: hello@workoutdemo.com</span>
                            </div>
                        </div>

                        <div className="footer-b-item"  >
                            <h1>LINKS</h1>
                            <div>
                                <div>About</div>
                                <div>Our Program</div>
                                <div>Our Process</div>
                                <div>Pricing</div>
                                <div>Blogs</div>
                                <div>FAQ</div>
                            </div>
                        </div>

                        <div className="footer-b-item">
                            <h1>Products</h1>
                            <div>
                                <div>Pasty</div>
                                <div>Fast Food</div>
                                <div>Birthday cake</div>
                            </div>
                        </div>

                        <div className="footer-b-item">
                            <h1>Other</h1>
                            <div>
                                <div>Privacy Policy</div>
                                <div>terms & Conditions</div>
                                <div>SiteMap</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Footer-main">
                © 2021 Copyright: <span className='footer-name'>Golden Bakery</span> 
            </div>
        </>
    )
}

export default Footer