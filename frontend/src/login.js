import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidation";
import axios from 'axios'

const Login = () => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setError] = useState({

    })
    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent default action
        const validationErrors = validation(value);  // run validation first and stores the result in a variable
        setError(validationErrors);  // use the variable value as error output
        if (!validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/login', value)
                .then(res => {
                    if(res.data === 'Success') { 
                        navigate('/Home');
                    }
                    else{
                        alert('No record exists')
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
      };      
    const handleInput = (event) => {
        setValue((prev) => ({...prev,[event.target.name]: event.target.value,})); // Using useState to update the object values
      };
  return (
    <div className="d-flex justify-content-center align-items-center bg-info vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              name = 'email'
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder=""
              onChange = {handleInput} //Record the input and sends it to handleInput function
            />
            <label for="floatingInput">Email address</label>
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="form-floating mb-3">
            <input
              name = 'password'
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange = {handleInput}
            />
            <label for="floatingPassword">Password</label>
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <div className="d-grid gap-2">
            <button type = 'submit' className="btn btn-primary btn-lg">Login</button>
            <Link to = '/Signup' className="btn btn-secondary">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
