import React from 'react'
import "./SectionTwo.scss"
import { FaStar } from "react-icons/fa6";
import burger from "./../img/bakery/burger.png";
import doughnut from "./../img/bakery/doughnut.png";
import pizza from "./../img/bakery/pizza.png";
import cake from "./../img/bakery/cupcake.png";
import sandwitch from "./../img/bakery/sandwich.png";
import chicken from "./../img/bakery/chicken.png";
import { BsCartFill } from "react-icons/bs";

const SectionTwo = () => {

    const item = [{ id: 1, name: "Burger", price: "10$", img: burger }, { id: 2, name: "Doughnut", price: "10$", img: doughnut }, { id: 3, name: "Naga Pizza", price: "30$", img: pizza }, { id: 4, name: "Cup Cake", price: "15$", img: cake }, { id: 5, name: "Patties ", price: "12$", img: sandwitch }, { id: 6, name: "Cripy", price: "20$", img: chicken }]

    return (
        <div className='secTwo-main'>
            <h1 className='secTwo-title'>Best Foods For You</h1>
            <p className='secTwo-title-two'>baked goods categories like bars, (breads, buns, rolls, biscuits and loaf breads), cookies, dessert(cake, cheesecakes and pies), muffins, pizza, snack cakes etc</p>

            <div className="setTwo-grid-center">
                <div className="secTwo-grid">
                    {item.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="secTwo-grid-item">
                                    <div className="secTwo-item-img">
                                        <img src={item.img} alt="" className='secTow-item-image' />
                                    </div>
                                    <div className="rating-div">
                                        <div className="rating">
                                            <FaStar className='rating-color' />
                                            <FaStar className='rating-color' />
                                            <FaStar className='rating-color' />
                                            <FaStar className='rating-color' />
                                            <FaStar />
                                        </div>
                                        <h5 className='my-2'>{item.name}</h5>
                                        <div className='price-div'>
                                            <div style={{ fontWeight: "500" }}>{item.price}</div>
                                            <BsCartFill className='cart-icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='see-more-btn'>See More</div>
            </div>
        </div>
    )
}

export default SectionTwo