import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link, useNavigate } from 'react-router-dom'
import Model from '../Model'
import Cart from '../screens/Cart';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Navbar() {
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();
    const cart = useCart();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">MyFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {localStorage.getItem('authToken') ? <div>
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/orders">My Orders</Link>
                                </li>
                            </div> : ''}
                        </ul>
                        <div>
                            {localStorage.getItem('authToken') ?
                                <>
                                    <div className="btn bg-white mx-2 text-success active" onClick={() => setCartView(true)} aria-current="page" to="/logout">Cart &nbsp;
                                        <Badge pill bg="danger">{cart.length}</Badge>
                                    </div>
                                    {cartView ? <Model onClose={() => setCartView(false)}><Cart /></Model> : null}
                                    <div className="btn bg-white mx-2 text-danger active" aria-current="page" to="/logout" onClick={handleLogout}>Logout</div>
                                </>
                                :
                                <Link className="btn bg-white mx-2 text-success active" aria-current="page" to="/login">Login</Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
