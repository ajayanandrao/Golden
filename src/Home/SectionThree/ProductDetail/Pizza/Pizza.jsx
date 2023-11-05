import React, { useEffect, useState } from 'react'
import "./Pizza.scss";
import pizzajson from "./../pizzaJson.json";
import { MdCurrencyRupee } from "react-icons/md"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"
import { db } from "./../../../../Firebase";
import { v4 } from 'uuid';

const Pizza = ({ item }) => {
    const [add, setAdd] = useState(0);
    const addedItemRef = collection(db, "userItems");

    const [api, setApiData] = useState([]);
    useEffect(() => {
        const nusub = onSnapshot(addedItemRef, (snap) => {
            const newApi = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setApiData(newApi);
        });
        return nusub;
    }, []);

    const [saveData, setSaveData] = useState([]);
    const saveItemRef = collection(db, "SaveItemData");

    useEffect(() => {
        const nusub = onSnapshot(saveItemRef, (snap) => {
            const newApi = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSaveData(newApi);

        });
        return nusub;
    }, []);


    const AddNum = async (item) => {
        const x = document.getElementById(`count(${item.id})`);
        const addedItemRef = doc(db, "userItems", item.id + "item");

        if (x) {
            let currentValue = parseInt(x.innerHTML, 10); // Parse the current value as an integer
            if (!isNaN(currentValue)) { // Check if parsing was successful
                currentValue += 1; // Increment the value
                setAdd(currentValue); // Assuming this is a function to update the state with the new value
                x.innerHTML = currentValue; // Update the HTML content

                try {
                    // setDoc(addedItemRef, {
                    //     name: item.name,
                    //     img: item.img,
                    //     des: item.des,
                    //     itemId: item.id,
                    //     itemCount: x.innerHTML,
                    //     timestamp: serverTimestamp()
                    // });
                } catch (error) {
                    // Handle any errors that may occur when adding a document
                }
            }
        }
    }


    const MinNum = (item) => {
        const x = document.getElementById(`count(${item.id})`);
        const addedItemRef = doc(db, "userItems", item.id + "item");

        if (x.innerHTML == 0) {
            return
        }
        if (x) {
            let currentValue = parseInt(x.innerHTML, 0); // Parse the current value as an integer
            if (!isNaN(currentValue)) { // Check if parsing was successful
                currentValue -= 1; // Increment the value
                x.innerHTML = currentValue; // Update the HTML content

                try {
                    setDoc(addedItemRef, {
                        name: item.name,
                        img: item.img,
                        des: item.des,
                        itemId: item.id,
                        itemCount: x.innerHTML,
                        timestamp: serverTimestamp()
                    });
                } catch (error) {
                    // Handle any errors that may occur when adding a document
                }

                if (x.innerHTML == 0) {
                    deleteDoc(addedItemRef)
                        .then(() => {
                        })
                        .catch((error) => {
                            console.error("Error deleting document: ", error);
                        });
                }

            }
        }
    }

    const Save = (item) => {
        const itemSaveRef = collection(db, "SaveItemData");

        console.log(item.id)
        if (add == 0) {
            return
        }

        addDoc(itemSaveRef, {
            name: item.name,
            des: item.des ? item.des : "",
            img: item.img,
            itemId: item.id,
            itemCount: add,
            mainPrice: item.price,
            Price: add * item.price,
            timestamp: serverTimestamp()
        });
        document.getElementById(`count(${item.id})`).innerHTML = 0;
        setAdd(0);
    }


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


    return (
        <div className='Pizza-main-container'>

            <div className="pizza-card">
                <img className="pizza-img" src={item.img} />
                <div className="pizza-detail">
                    <h2>{item.name}</h2>
                    {item.des}
                    <div className='item-price'>{item.price}<MdCurrencyRupee /></div>
                </div>

                <div className="pizza-buttons">

                    <div className="pizza-counter-div">
                        <div className='pizza-counter-icon' onClick={() => MinNum(item)}>
                            <i className="bi bi-dash-circle"></i></div>
                        <div className='mx-3' style={{ fontSize: "20px" }} id={`count(${item.id})`}>0</div>
                        <div className='pizza-counter-icon' onClick={() => AddNum(item)}>
                            <i className="bi bi-plus-circle"></i></div>
                    </div>

                    <div className='item-price my-4 ' onClick={() => Save(item)}>Save</div>
                </div>
            </div >

        </div >
    )
}

export default Pizza