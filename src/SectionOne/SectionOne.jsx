import React from 'react'
import "./SectionOne.scss"
import doughnut from "./../img/bakery/doughnut2.png"
import Navbar from '../Navbar/Navbar'
import bg from "./../img/bakery/bg.png";

const SectionOne = () => {

    return (

            <div className='SecOne-main' style={{backgroundImage:`url(${bg})`}}>
                <Navbar />
                <div className="section-div-wrapper">

                    <div className="sec-card-one">
                        <p className='heading-one'>THE SPECIAL TASTE</p>
                        <h1 className='main-hedaing'><div className='me-2'>Get Your </div> Own Bite of</h1>
                        <h1 className='h1-color mb-5'>Safisfaction</h1>
                        <p className='heding-text' style={{ textTransform: "capitalize", fontSize: "18px" }}>cosmetics designed for skin care can be used to cleanse, exfoliate and protect the skin, as well as replenishng it, by the use of cleansers, toners, serums,etx.</p>

                        <div className='order-btn'>Order Now</div>
                    </div>

                    <div className="sec-card-two">
                        <img src={doughnut} className='sec-card-two-img' alt="" />

                        <div>
                            <p className='heding-text' style={{ textTransform: "capitalize", fontSize: "18px" }}>cosmetics designed for skin care can be used to cleanse, exfoliate and protect the skin, as well as replenishng it, by the use of cleansers, toners, serums,etx.</p>

                            <div className='order-btn'>Order Now</div>
                        </div>
                    </div>

                </div>

            </div>
    
    )
}

export default SectionOne