import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Register() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setArea] = useState("");
    const [zip, setZip] = useState("");

    const history = useHistory();

    //get response from '/login' route from backend index.js
    function handleSubmit(event) {
        Axios.post(`http://localhost:4000/register`, {
            first_name: first_name,
            last_name: last_name,
            address: address,
            apt_num: address2,
            city: city,
            state: state,
            zip: zip,
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response);
                if (response.data === 'Ok') {
                    alert("You have successfully registered, please log in.")
                    history.push('/Login');

                } else {
                    alert("Please fill out registration form completely & re-submit.");
                    /*history.push('/Login');*/
                }
            })
        event.preventDefault();
    }

    return (

        <div className="container">

            <Col className="col-12 col-lg-8">
                <h3> Register </h3>
                <Form>
                    <Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First" onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Surname" onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>


                        <Form.Group controlId="formGridAddress3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress4">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => setAddress2(e.target.value)} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" onChange={(e) => setArea(e.target.value)} defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={(e) => setZip(e.target.value)} />
                            </Form.Group>
                        </Form.Row>

                    </Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Register
            </Button>

             <Button className="loginbtn" variant="primary" type="submit"><a href="./login">Log In</a>
            </Button>

                </Form>
                <br />
            </Col>
        </div>

    )
}

export default Register;