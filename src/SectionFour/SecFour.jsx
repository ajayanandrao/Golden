import React from 'react'
import "./SecFour.scss"
import { FaStar } from 'react-icons/fa6'
import { BsCartFill } from 'react-icons/bs'



const SecFour = ({ title, name1, name2, name3, price1, price2, price3, img1, img2, img3 }) => {

    return (
        <div className='SecFour-main'>
            <h1 className='SecFour-title'>{title}</h1>
            <p className='SecFour-title-two'>Small cakes were baked in individual ramekins, hence the name cupceke</p>

            <div className="setTwo-grid-center">
                <div className="secTwo-grid">

                    <div className="secTwo-grid-item">
                        <div className="secTwo-item-img">
                            <img src={img1} alt="" className='secTow-item-image' />
                        </div>
                        <div className="rating-div">
                            <div className="rating">
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar />
                            </div>
                            <h5 className='my-2'>{name1}</h5>
                            <div className='price-div'>
                                <div style={{ fontWeight: "500" }}>{price1}</div>
                                <BsCartFill className='cart-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="secTwo-grid-item">
                        <div className="secTwo-item-img">
                            <img src={img2} alt="" className='secTow-item-image' />
                        </div>
                        <div className="rating-div">
                            <div className="rating">
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar />
                            </div>
                            <h5 className='my-2'>{name2}</h5>
                            <div className='price-div'>
                                <div style={{ fontWeight: "500" }}>{price2}</div>
                                <BsCartFill className='cart-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="secTwo-grid-item">
                        <div className="secTwo-item-img">
                            <img src={img3} alt="" className='secTow-item-image' />
                        </div>
                        <div className="rating-div">
                            <div className="rating">
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar className='rating-color' />
                                <FaStar />
                            </div>
                            <h5 className='my-2'>{name3}</h5>
                            <div className='price-div'>
                                <div style={{ fontWeight: "500" }}>{price3}</div>
                                <BsCartFill className='cart-icon' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='see-more-btn'>Order Now</div>
            </div>
        </div>
    )
}

export default SecFour