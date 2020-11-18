import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Navbar from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import "./Nav.css";


function Nav() {
  return (
    <Navbar class="shadow-lg p-3 b-1 bg-light text-dark" id="Nav">
    <img
    alt="Sessions Logo"
    src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/17983649771595501283-512.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />
    <div class="container">
    <Link className="nav-link" to={"/home"}>
             Session
            </Link>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/recording"} id="navRec">
             Recording Studios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/rehearsal"}id="navPrac">
              Rehearsal Studios
            </Link>
            <Link className="nav-link" to={"/register"} id="navCreate">
            Create Account
            </Link>
          </li>
          <li>
          <div class="search-container">
<form action="/action_page.php">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit">Submit</button>
</form>
</div>
          </li>
          
        </ul>
      </div>
    </div>
  </Navbar>

);
}
      

export default Nav;