import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [auth, setAuth] = useState(false);
    const history = useHistory();

    //get response from '/login' route from backend index.js
    function handleSubmit(event) {
        Axios.post(`http://localhost:4000/login`, {
            email: email,
            password: password
        })

            .then((response) => {
                //redirect user to a main page or back to login page on failure
                console.log(response);
                //if the data from response does not return 'Invalid', add token to local storage
                //and use history.push to route user to desired page
                if (response.data !== 'Invalid Credentials') {
                    localStorage.setItem('token', JSON.stringify(response));
                    alert("You have successfully logged in!")
                    history.push('/home');

                } else {
                    alert("Please enter valid credentials");
                    history.push('/register-login');
                }

            })
            .catch((err) => {
                // if fails, redirect user to login page
                console.log(`Login error...${err}`);

            })
        event.preventDefault();
    }

    return (

        <div className="col-sm-6 login-section-wrapper">
            <div className="brand-wrapper">
                <i className="fas fa-headphones-alt fa-7x"></i>
            </div>
            <div className="login-wrapper my-auto">
                <h1 className="login-title">Log in</h1>
                <form action="#!">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="loginEmail" className="form-control"
                            placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="loginPass" className="form-control"
                            placeholder="enter your passsword" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input name="login" id="loginBtn" className="btn btn-block login-btn" type="button" value="Login" onClick={handleSubmit} />
                </form>

                <p className="login-wrapper-footer-text">Don't have an account? <a href="./register/index.html"
                    className="text-reset">Register here</a></p>
            </div>
        </div>
    )
}

export default Login;