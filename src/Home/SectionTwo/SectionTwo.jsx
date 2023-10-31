import React from 'react'
import "./SectionTwo.scss"
import image from "./../../images/b/hand.jpg";

const SectionTwo = () => {
    return (
        <div className='SectionTwo-main-container'>
            <div className="SectionTwo-One">
                <div><img src={image} className="SectionTwo-One-Card" alt="" /></div>
            </div>

            <div className="SectionTwo-Two">
                <h1>Our Mission</h1>
                <p>It all began in 2003 with two friends from business school who shared a sweet tooth and a dream of baking. 12 years later, we bake all of our products on-site, filling our 1940's - style stores with the delicious smells of fresh cakes and pies to bring back that delightful, warm feeling of Grandma’s kitchen.</p>
            </div>
        </div>
    )
}

export default SectionTwo