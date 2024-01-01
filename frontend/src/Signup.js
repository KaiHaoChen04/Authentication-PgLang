import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./SignupValidation";
import axios from 'axios';

const Signup = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setError] = useState({});

    const navigate = useNavigate();
    const handleInput = (event) => {
        setValue(prev => ({...prev,[event.target.name]: [event.target.value]}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(value);
        setError(validationErrors);
        
        if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/signup', value)
                .then(res => {
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-info vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-Up</h2>
                <form action = "" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="nameInput"
                            name="name"
                            placeholder=""
                            onChange={handleInput}
                        />
                        <label htmlFor="nameInput">Name</label>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control rounded-0"
                            id="emailInput"
                            name="email"
                            placeholder=""
                            onChange={handleInput}
                        />
                        <label htmlFor="emailInput">Email address</label>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control rounded-0"
                            id="passwordInput"
                            name="password"
                            placeholder="Password"
                            onChange={handleInput}
                        />
                        <label htmlFor="passwordInput">Password</label>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="d-grid gap-2">
                        <button type = 'submit' className="btn btn-primary btn-lg">Create</button>
                        <Link to='/' className="btn btn-secondary">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
