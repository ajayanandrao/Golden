import React from 'react'
import "./HospitalList.scss";
import hospitaljson from "./../json/hospital.json";

const HospitalList = () => {
    return (
        <div className='hospital-list-main-container'>

            <div className="searchDiv">
                <input type="text" placeholder='Hospital Name' className='mehakar-input' />
                <button className='btn  btn-primary '>Search</button>
            </div>

            <div className="SearchCard">
                {hospitaljson.map((item) => {
                    return (
                        <>
                            <div className="searchCard-grid-center">
                                <div className="searchCard-inner">
                                    <div className="columnOne"></div>
                                    <div className="columnTwo">
                                        <h3>{item.hospitalName}</h3>
                                        <div className="name">{item.doctorName} <span style={{ fontSize: "16px" }}>{item.qulification}</span></div>
                                        <div className="columnTwo-items">
                                            <div className="columnTwo-item-title">Location</div>
                                            <div className="columnTwo-item-detail">{item.location}</div>
                                        </div>
                                        <div className="columnTwo-items">
                                            <div className="columnTwo-item-title">Contact</div>
                                            <div className="columnTwo-item-detail">{item.contact}</div>
                                        </div>
                                        <div className="columnTwo-items">
                                            <div className="columnTwo-item-title">Time</div>
                                            <div className="columnTwo-item-detail">{item.time}</div>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default HospitalList