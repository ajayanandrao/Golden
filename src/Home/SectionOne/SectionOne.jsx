import React from 'react'
import "./sectionOne.scss";
import v from "./../../Videos/v.mp4";

const SectionOne = () => {
    return (
        <div className='SectionOne-main-container'>
            <div className="SectionOne-Brand-Name">The Golden Bakary</div>
            <video className='SectionOne-video' autoPlay muted loop>
                <source src={v} />
            </video>
        </div>
    )
}

export default SectionOne