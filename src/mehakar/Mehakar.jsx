import React, { useState } from 'react'
import "./Mehakar.scss";
import { Link } from 'react-router-dom';
import hospitaljson from "./json/hospital.json";

const Mehakar = () => {
    const [category, setCategory] = useState(false);
    const HandleCategory = () => {
        setCategory(!category);
    }

    const [selectedCategory, setSelectedCategory] = useState("Category");
    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
        setCategory(!category);
    }
    return (
        <>
            <div className='mehakar'>
                <h3>The Mehakar</h3>
                <ol>
                    <li> <Link to={"hospital"}> Hospital</Link></li>
                    <li>plumber</li>
                    <li>mechanic</li>
                </ol>
            </div >

            <div className="hospital" id='hospital'>
                <h2>hospital</h2>

                <div className="searchDiv">
                    <input type="text" placeholder='Hospital Name' className='mehakar-input' />
                    <button className='btn  btn-primary btn-sm'>Search</button>
                </div>

                <div className='category' onClick={HandleCategory}>{selectedCategory}</div>
                {category ?
                    <ul>
                        <li onClick={() => handleSelectedCategory("General Hospital")}>General Hospital</li>
                        <li onClick={() => handleSelectedCategory("Eye Hospital")}>Eye Hospital</li>
                        <li onClick={() => handleSelectedCategory("Boan Hospital")}>Boan Hospital</li>
                        <li onClick={() => handleSelectedCategory("Sceen Hospital")}>Sceen Hospital</li>
                    </ul>
                    :
                    null
                }


                {/* <div className="SearchCard">
                    <div className="columnOne">

                    </div>
                    {hospitaljson.map((item) => {
                        return (
                            <>
                                <div className="columnTwo">
                                    <h2>{item.hospitalName}</h2>
                                    <div className="name">{item.doctorName} <span style={{ fontSize: "16px" }}>{item.qulification}</span></div>
                                    <div className="columnTwo-items">
                                        <div className="columnTwo-item-title">Location</div>
                                        <div className="columnTwo-item-detail">{item.location}</div>
                                    </div>
                                    <div className="columnTwo-items">
                                        <div className="columnTwo-item-title">Contact</div>
                                        <div className="columnTwo-item-detail">{item.contact}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div> */}
            </div>
        </>
    )
}

export default Mehakar