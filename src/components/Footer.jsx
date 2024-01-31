import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-top border-bottom pt-3 pb-3 mb-3">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="/features" className="nav-link px-2 text-muted">Features</Link></li>
                </ul>
                <p className="text-center text-muted">© {year} <Link to="/" className="outline-none text-decoration-none text-success">MyFood</Link>, Inc</p>
            </footer>
        </div>
    );
}
