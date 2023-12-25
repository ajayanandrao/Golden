import React from 'react'
import "./Home.scss"
import SectionOne from '../SectionOne/SectionOne'
import SectionTwo from '../SectionTwo/SectionTwo'
import SecThree from '../SectionThree/SecThree'
import SecFour from '../SectionFour/SecFour'
import SecFive from '../SectionFive/SecFive'

import lavendar from "./../img/bakery/cupcake.png";
import lemon from "./../img/bakery/lemon.png";
import caramel from "./../img/bakery/Caramel.png";

import galzed from "./../img/bakery/doughnut.png";
import chocolate from "./../img/bakery/chD.png";
import chees from "./../img/bakery/cheesD.png";
import SecSix from '../SectionSix/SecSix'
import SecSevan from '../SectionSevan/SecSevan'
import Footer from '../Footer/Footer'

const Home = () => {

    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SecThree />

            <SecFour

                title="Trending Cup Cakes"

                name1="Lavender"
                name2="Lemon"
                name3="Caramel"

                price1="18$"
                price2="10$"
                price3="15$"

                img1={lavendar}
                img2={lemon}
                img3={caramel}
            />

            <SecFive />

            <SecFour

                title="Trending Donuts"

                name1="Glazed"
                name2="Chocolate"
                name3="Cheese"

                price1="18$"
                price2="10$"
                price3="15$"

                img1={galzed}
                img2={chocolate}
                img3={chees}

            />

            <SecSix />

            <SecSevan />
            <Footer />
        </div>
    )
}

export default Home