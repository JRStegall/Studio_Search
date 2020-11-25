import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Home() {

    return(
        <div className="container">
            <i className="fas fa-headphones-alt fa-7x"></i>
        <h1>Sessions</h1>
        <p>Find studio space that fits your needs and budget from the palm of your hand!</p>
        
        <Button variant="primary" type="submit">
                        <Link to="/register">Register</Link> 
            </Button>

             <Button className="loginbtn" variant="primary" type="submit"><Link to="/login">Log In</Link>
            </Button>

        </div>
    )
} 

export default Home;