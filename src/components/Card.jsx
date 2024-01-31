import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card m-5" style={{ width: "18rem", maxHeight: '360px' }}>
                <img src="https://source.unsplash.com/random/1000x1000?food" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
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
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5 fw-bold">Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
