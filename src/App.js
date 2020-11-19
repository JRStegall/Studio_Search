import React,{/* { useState } */}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Recording from './Components/Recording';
import Rehearsal from './Components/Rehearsal';
import Dance from './Components/Dance';
import Navigate from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import Map from './Components/Map';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Navigate />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recording" component={Recording} />
          <Route path="/rehearsal" component={Rehearsal} />
          <Route path="/dance" component={Dance} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/map" component={Map}/>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Home/>
              </div>

              <div className="row">
                <div className="col-8">
                <Login />
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
