import React, { useEffect, useState } from 'react'
import "./OrderPage.scss";
import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { MdCurrencyRupee } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import tomato from "./../images/b/tomato.png";
import stobery from "./../images/b/strawberry.png";

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

    console.log("Total Item Count: " + totalItemCount);


    return (
        <div className='orderPage-main-container'>
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="orderpage-total">Total: {totalItemCount} <MdCurrencyRupee /></div>
                        <button className='btn btn-primary btn-sm'>Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage 