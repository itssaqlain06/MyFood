import React from 'react'
import { useCart, useDispatch } from './ContextReducer';

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);
    const handleAddToCart = () => {

    }
    return (
        <div>
            <div className="card my-3" style={{ width: "18rem", maxHeight: '360px' }}>
                <img style={{ height: "150px", objectFit: "fill" }} src={props.foodItem.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">Some quick example text.</p>
                    <div className="container w-100">
                        <select className="mt-2 h-100 bg-success rounded text-white">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className="mt-2 h-100 bg-success rounded mx-2 text-white">
                            {priceOptions && priceOptions !== '' ? priceOptions.map((price) => {
                                return <option value={price} key={price}>{price}</option>
                            }) : ''}
                        </select>
                        <div className="d-inline h-100 fs-5 fw-bold">Total Price</div>
                    </div>
                    <hr />
                    <button className='btn bg-success text-white mx-2' onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
