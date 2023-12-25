import { Link } from "react-router-dom"
import "./Navbar.scss"
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {

    const [on, setOn] = useState(false);

    function overlayOn() {
        setOn(!on);
    }

    return (

        <>
            {on &&
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="Side-nav-item-div">
                    <IoClose className="nav-close" onClick={overlayOn} />

                    <div className="nav-item ">
                        Home
                    </div>
                    <div className="nav-item">
                        Our Cake
                    </div>
                    <div className="nav-item">
                        About
                    </div>
                    <div className="nav-item">
                        Contact us
                    </div>
                    <div className="nav-item">
                        Profile
                    </div>
                </motion.div>
            }

            <div className='navbar-main'>
                <div className="nav-brand ">
                    <Link to="/" className="link title">  Golden Bakery</Link>
                </div>
                <div className="nav-item-div">
                    <div className="nav-item ">
                        Home
                    </div>
                    <div className="nav-item">
                        Our Cake
                    </div>
                    <div className="nav-item">
                        About
                    </div>
                    <div className="nav-item">
                        Contact us
                    </div>
                    <div className="nav-item">
                        <BsFillCartFill className="cart-icon" />
                    </div>

                </div>



                <div className="menu-div">
                    <div className="nav-item-mainu me-3">
                        <BsFillCartFill className="cart-icon" />
                    </div>
                    <div className="nav-item-mainu">
                        <RiMenu5Fill onClick={overlayOn} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar