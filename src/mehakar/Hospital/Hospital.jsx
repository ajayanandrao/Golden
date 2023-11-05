import React, { useState } from 'react'
import "./Hospital.scss";
import hospitaljson from "./../json/hospital.json";
import { Link } from 'react-router-dom';
import HospitalSearch from './HospitalSearch';

const Hospital = () => {
    const [search, setSearch] = useState("")
    return (
        <div className='hospital'>
            <div className='title-page'>Hospital</div>
            <div className="searchDiv">
                <input type="text" placeholder='Hospital Name' className='mehakar-input' onChange={(e) => setSearch(e.target.value)} />
                <button className='btn  btn-primary '>Search</button>
            </div>

            {search ?
                <HospitalSearch />
                :
                <div className="SearchCategoryDiv">
                    <Link to={"/hospital_List/"} className="category-item-div link">
                        <div className="category-item-img"></div>
                        <div className="category-item-name">General Hospital</div>
                    </Link>
                    <Link to={"/hospital_List/"} className="category-item-div link">
                        <div className="category-item-img"></div>
                        <div className="category-item-name">Eye Hospital</div>
                    </Link>
                    <Link to={"/hospital_List/"} className="category-item-div link">
                        <div className="category-item-img"></div>
                        <div className="category-item-name">Sceen Hospital</div>
                    </Link>
                    <Link to={"/hospital_List/"} className="category-item-div link">
                        <div className="category-item-img"></div>
                        <div className="category-item-name">Ortho Hospital</div>
                    </Link>
                    <Link to={"/hospital_List/"} className="category-item-div link">
                        <div className="category-item-img"></div>
                        <div className="category-item-name">Heart Hospital</div>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Hospital