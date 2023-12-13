import React, { useEffect, useState } from 'react'
import "./OrderPage.scss";
import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { MdCurrencyRupee } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import tomato from "./../images/b/tomato.png";
import stobery from "./../images/b/strawberry.png";
import { FaChevronLeft } from "react-icons/fa6";
import { SiPhonepe } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import sbi from "./../images/sbi.png"
import icci from "./../images/ICICI.png"
import hdfc from "./../images/HDB.png"
import axis from "./../images/axis.png"
import kotak from "./../images/kotak.png"

const OrderPage = () => {
    const [saveData, setSaveData] = useState([]);
    const saveItemRef = collection(db, "SaveItemData");

    useEffect(() => {
        const nusub = onSnapshot(saveItemRef, (snap) => {
            const newApi = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSaveData(newApi);

        });
        return nusub;
    }, []);


    const Decriment = (item) => {
        const addedItemRef = doc(db, "SaveItemData", item.id);
        console.log(item.Price)

        if (item.Price <= item.mainPrice) {
            deleteDoc(addedItemRef);
            return
        }

        setDoc(addedItemRef, {
            name: item.name,
            des: item.des,
            img: item.img,
            itemId: item.id,
            mainPrice: item.mainPrice,
            itemCount: item.itemCount - 1,
            Price: item.Price - item.mainPrice,
            timestamp: serverTimestamp()
        });
    }

    const Incriment = (item) => {
        const addedItemRef = doc(db, "SaveItemData", item.id);
        console.log(item.Price)

        const mainPrice = parseInt(item.mainPrice, 10);


        setDoc(addedItemRef, {
            name: item.name,
            des: item.des,
            img: item.img,
            itemId: item.id,
            mainPrice: item.mainPrice,
            itemCount: item.itemCount + 1,
            Price: item.Price + mainPrice,
            timestamp: serverTimestamp()
        });
    }

    const DeleteOrder = async (item) => {
        console.log(item.id)
        const addedItemRef = doc(db, "SaveItemData", item.id);
        await deleteDoc(addedItemRef);
    }


    const totalItemCount = saveData.reduce((total, item) => total + item.Price, 0);

    const [overlayOn, setOverlayOn] = useState(false)
    const [overlayPhonepe, setOverlayPhonepe] = useState(false)
    const [overlayGPay, setOverlayGPay] = useState(false)

    function Googlepay() {
        setOverlayGPay(!overlayGPay);
        setOverlayPhonepe(false)
    }
    function Phonepe() {
        setOverlayPhonepe(!overlayPhonepe);
        setOverlayGPay(false)
    }
    function on() {
        setOverlayOn(!overlayOn);
        setOverlayPhonepe(false)
        setOverlayGPay(false)
    }



    return (
        <div className='orderPage-main-container'>

            {overlayOn &&
                <div className="overlayOn-div">
                    <div className="overlayOn-card">
                        <div className="ovelayOn-close">
                            <FaChevronLeft style={{ fontSize: "24px" }} onClick={on} />
                            <div style={{ fontWeight: 700 }} className='ms-3' onClick={on}> Back</div>
                        </div>

                        <div className='w-100'>
                            <div className='my-3 px-3'>
                                <div style={{ color: "black", marginBottom: "10px", fontWeight:"600" }}>UPI</div>
                                <div className='upi-warapper'>
                                    <div className='upi-div mb-2' onClick={Googlepay}>
                                        <FcGoogle className="upi-icon" />
                                        <div className="upi-name">Google Pay</div>
                                    </div>
                                    {overlayGPay &&
                                        <div className="selected-id mb-3">
                                            <input type="text" className='select-id-input' placeholder='Enter VPA ID' />
                                            <div className='btn btn-primary'>Pay {totalItemCount}<MdCurrencyRupee /></div>
                                        </div>
                                    }
                                    <div className='upi-div mt-2' onClick={Phonepe} >
                                        <SiPhonepe className="upi-icon" style={{ color: "#642ca2" }} />
                                        <div className="upi-name">Phone Pay</div>
                                    </div>
                                    {overlayPhonepe &&
                                        <div className="selected-id mt-2">
                                            <input type="text" className='select-id-input' placeholder='Enter VPA ID' />
                                            <div className='btn btn-primary'>Pay {totalItemCount}<MdCurrencyRupee /></div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='my-4 px-3'>
                                <div style={{ color: "black", marginBottom: "10px", fontWeight:"600" }}>NetBanking</div>
                                <div className="bank-Wrapper">
                                    <div className='bank-ul'>
                                        <div className='bank-li'>
                                            <img src={sbi} className='bank-icon' alt="" />
                                            State Bank Of India</div>
                                        <div className='bank-li'>
                                            <img src={icci} className='bank-icon' alt="" />
                                            ICCI Bank</div>
                                        <div className='bank-li'>
                                            <img src={hdfc} className='bank-icon' alt="" />
                                            HDFC Bank</div>
                                        <div className='bank-li'>
                                            <img src={axis} className='bank-icon' alt="" />
                                            Axis Bank</div>
                                        <div className='bank-li'>
                                            <img src={kotak} className='bank-icon' alt="" />
                                            Kotak Bank</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='orderpage-brand'>Your Golden Orders</div>

            <div className='orderpage-api'>
                {saveData.map((item) => {
                    return (
                        <>
                            <div className="pizza-card">
                                <div className="close-btn" onClick={() => DeleteOrder(item)}><AiOutlineClose /></div>
                                <img className="pizza-img" src={item.img} />
                                <div className="pizza-detail">
                                    <h4>{item.name}</h4> <div>Price {item.mainPrice} <MdCurrencyRupee /></div>

                                    <div className="pizza-buttons">

                                        <div className="pizza-counter-div">
                                            <div className='pizza-counter-icon' onClick={() => Decriment(item)}>
                                                <i className="bi bi-dash-circle"></i></div>
                                            <div className='mx-3' style={{ fontSize: "20px" }} id={`count(${item.id})`}>{item.itemCount}</div>
                                            <div className='pizza-counter-icon' onClick={() => Incriment(item)}>
                                                <i className="bi bi-plus-circle"></i></div>
                                        </div>
                                        <div className='item-price'>{item.Price}<MdCurrencyRupee /></div>
                                    </div>
                                </div>
                            </div >
                        </>
                    )
                })}


                <div className="orderPage-order-div">
                    <img src={tomato} className='orderPage-tomato-div' alt="" />
                    <img src={stobery} className='orderPage-stobery-div' alt="" />
                    <h4>Order Summary</h4>
                    <div>
                        {saveData.map((item) => {
                            return (
                                <>
                                    <ul>
                                        <li> {item.name} {item.itemCount}</li>
                                    </ul>
                                </>
                            )
                        })}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", }}>
                        <div className="orderpage-total " style={{ fontSize: "16px" }}>Delivery Charges: 40  <MdCurrencyRupee /></div>
                        <div className="orderpage-total my-2">Total Amount: {40 + totalItemCount} <MdCurrencyRupee /></div>
                        <button className='btn btn-primary ' onClick={on}>ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage 