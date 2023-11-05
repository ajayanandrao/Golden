import React from 'react'
import "./HospitalSearch.scss";
import hospitaljson from "./../json/hospital.json";

const HospitalSearch = () => {
    return (
        <div className='hospitalSearch-main-container'>
            <div className="HospitalSearchCard">
                {hospitaljson.map((item) => {
                    return (
                        <>
                            <div className="searchCard-grid-center">
                                <div className="searchCard-inner">
                                    <div className="columnOne"></div>

                                    <div className="columnTwo">
                                        <h3>{item.hospitalName}</h3>
                                        <div className="name">{item.doctorName} <span style={{ fontSize: "16px" }}>{item.qulification}</span></div>
                                        <div>
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

export default HospitalSearch