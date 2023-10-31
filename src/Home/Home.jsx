import React from 'react'
import "./Home.scss";
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';

const Home = () => {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}

export default Home