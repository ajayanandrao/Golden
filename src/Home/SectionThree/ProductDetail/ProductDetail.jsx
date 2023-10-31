import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import product from "./../product.json";
import "./ProductDetail.scss";
import Pizza from './Pizza/Pizza';

const ProductDetail = () => {
    const { id } = useParams();

    const [productId, setProductId] = useState(null);
    useEffect(() => {
        const fetchGame = async () => {
            try {
                const selectedGame = product.find(gameItem => gameItem.id == id);
                if (selectedGame) {
                    setProductId(selectedGame);
                }
            } catch (error) {
                console.log('Error fetching game:', error);
            }
        };

        fetchGame();
    }, [id])

    return (
        <div>
            {productId ? (<>

                <div className="product-bg-div" style={{ backgroundImage: `url(${productId.bg})` }}>
                    {productId.name}
                </div>
                <h1>{productId.SubApi.map((p) => {
                    return (
                        <>
                            {/* <div>{p.name}</div> */}
                            {/* <img src={p.img} width={"100px"} alt="" /> */}
                            <Pizza item={p} />
                        </>
                    )
                })}</h1>
            </>)
                :
                "loading..."
            }
        </div>
    )
}

export default ProductDetail