import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import photo from "./../images/200.png";
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const [saveData, setSaveData] = useState([]);
    const saveItemRef = collection(db, "SaveItemData");

    useEffect(() => {
        const nusub = onSnapshot(saveItemRef, (snap) => {
            const newApi = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSaveData(newApi);

        });
        return nusub;
    }, []);

    return (
        <div className='navbar'>
            <Link to="/" className='link'>
                <div className="Logo">
                    Golden
                </div>
            </Link>
            <Link to={"/order/"} className='save-cart link'>
                <i class="bi bi-cart2" style={{ fontSize: "24px", cursor: "pointer" }}></i>
                <div className='save-item'>{saveData.length}</div>
            </Link>
            <div className="navbar-mainu">
                <div className="navbar-mainu-one">
                    <span>Product</span>
                    <span className='mx-3'>About Us</span>

                </div>
                <div className="navbar-mainu-two">

                    <div>
                        {/* <img src={photo} alt="" className='userPhoto' /> */}
                        <Link to={"/login"} className='link'>
                            <FaUserCircle className='avatar' />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar