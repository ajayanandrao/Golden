import React from 'react'
import "./SectionThree.scss";
import kothamir from "./../../images/b/kothambir1.png"
import sjdf from "./../../images/b/sjdf.png"
import tomato from "./../../images/b/tomato.png"
import stoberry from "./../../images/b/strawberry.png"
import product from "./product.json"
import { Link } from 'react-router-dom';

const SectionThree = () => {
    return (
        <div className='SectionThree-main-container'>
            <h2>Golden Products</h2>
            <img src={kothamir} className='kothambir' alt="" />
            <img src={sjdf} className='tomato' alt="" />
            <div className="Sectionthree-center">
                <div className="SectionThree-card-grid-div">
                    {product.map((item) => {
                        return (<>
                            <Link to={`/product/${item.id}`} className="Sectionthree-card-div link" style={{ backgroundImage: `url(${item.img})` }}>
                                {/* <img src={kothamir} className='kothambir-card' alt="" /> */}
                                {/* <img src={stoberry} className='tomato-card' alt="" /> */}
                                <div className="Sectionthree-card-name">
                                    {item.name}
                                </div>
                            </Link>
                        </>)
                    })}

                </div>
            </div>

        </div>
    )
}

export default SectionThree