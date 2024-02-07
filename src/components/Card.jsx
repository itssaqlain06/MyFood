import React, { useState, useEffect, useRef } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);
    const priceRef = useRef();
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState(1)
    let dispatch = useDispatchCart();
    let data = useCart();
    let foodItem = props.item;
    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                return
            }
            return
        }
        await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div className="card my-3" style={{ width: "18rem", maxHeight: '360px' }}>
                <img style={{ height: "150px", objectFit: "fill" }} src={props.foodItem.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">Some quick example text.</p>
                    <div className="container w-100">
                        <select className="mt-2 h-100 bg-success rounded text-white" onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className="mt-2 h-100 bg-success rounded mx-2 text-white" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions && priceOptions !== '' ? priceOptions.map((price) => {
                                return <option value={price} key={price}>{price}</option>
                            }) : ''}
                        </select>
                        <div className="d-inline h-100 fs-5 fw-bold">${finalPrice}/-</div>
                    </div>
                    <hr />
                    <button className='btn bg-success text-white mx-2' onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
