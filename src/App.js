import React,{/* { useState } */}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Recording from './Components/Recording.js';
import Rehearsal from './Components/Rehearsal';
import Nav from './Components/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';

// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
// import CardColumns from 'react-bootstrap/CardColumns'


function App() {



  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recording" component={Recording} />
          <Route path="/rehearsal" component={Rehearsal} />
          <Route path="/register" component={Register}/>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Home/>
              </div>

              <div className="row">
                <div className="col-8">
                <Recording />
                </div>
              </div>
            </div>
          </div>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;