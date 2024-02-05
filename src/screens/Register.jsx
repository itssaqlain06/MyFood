import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geoLocation: "" });
    const navigate = useNavigate();
    const handleRegisterUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/createuser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geoLocation }),
            });
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert("You have provided invalid credentials");
            }
            if (json.success === true) {
                navigate('/login');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onValueChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='center-of-page container mt-5'>
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form onSubmit={handleRegisterUser}>
                            <div className="text-center mb-3">
                                <p>Register with:</p>
                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">OR</p>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input onChange={onValueChange} type="text" name='name' id="loginName" className="form-control" value={credentials.name} />
                                <label className="form-label" htmlFor="loginName">Name</label>
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input onChange={onValueChange} type="email" name='email' id="loginEmail" className="form-control" value={credentials.email} />
                                <label className="form-label" htmlFor="loginEmail">Email</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input onChange={onValueChange} type="password" name='password' id="loginPassword" className="form-control" value={credentials.password} />
                                <label className="form-label" htmlFor="loginPassword">Password</label>
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input onChange={onValueChange} type="text" name='geoLocation' id="geoLocation" className="form-control" value={credentials.geoLocation} />
                                <label className="form-label" htmlFor="geoLocation">Location</label>
                            </div>

                            <button type="submit" className="btn btn-success btn-block mb-4">Register</button>

                            <div className="text-center">
                                <p>Already a member? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
