import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Navbar from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Nav() {
  return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link className="nav-link" to={"/home"}>
                 Studio Search
                </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/recording"}>
                 Recording Studios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/rehearsal"}>
                  Rehearsal Studios
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
