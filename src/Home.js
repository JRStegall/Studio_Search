import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios'; 
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
    constructor() {
      super();
      this.state = {
        
        email: "",
        pw:"",
      }
    };

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
      e.preventDefault();
      const { email,pw} = this.state;
      console.log(this.state)
      Axios.post('http://localhost:4000/login', {email,pw})
        .then((result) => {
          alert("Login Accepted!")
          window.location.href = '/recording'
        });
    }

    render() {
      const {email,pw} = this.state;
      return (
          <div id="homeLogin">
        <form  onSubmit={this.onSubmit}>
            <h1>Log In</h1>
           <input class="inputOne"
            type="email"
            name="email"
            placeholder =" Email Address"
            value={email}
            onChange={this.onChange}
          />
          <input class="inputTwo"
            type="password"
            name="pw"
            placeholder = "Password"
            value={pw}
            onChange={this.onChange}
          />
           <button id="loginSubmit" type="submit" onClick={this.onSubmit}>Login
           </button>
           <ul>
          <Link id="loginRedirect" to={"/register"}>Create Account
          </Link>
          </ul>
          </form>
          </div>
           );
        }
      }
export default Home;