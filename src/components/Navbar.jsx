import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

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
                                    <div className="btn bg-white mx-2 text-success active" aria-current="page" to="/logout">My Cart</div>
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
