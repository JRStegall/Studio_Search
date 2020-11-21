import React from 'react';
import Button from 'react-bootstrap/button';



function Home() {

    return(
        <div className="home">
            <i className="fas fa-headphones-alt fa-7x"></i>
        <h1>Sessions</h1>
        <p>Find studio space that fits your needs and budget from the palm of your hand!</p>
        
        <Button variant="primary" type="submit">
                        <a href="./register">Register</a> 
            </Button>

             <Button className="loginbtn" variant="primary" type="submit"><a href="./login">Log In</a>
            </Button>

        </div>
    )
} 

export default Home;