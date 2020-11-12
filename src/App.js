import React,{/* { useState } */}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Recording from './components/Recording';
import Rehearsal from './components/Rehearsal';
import Nav from './components/Nav';
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
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recording" component={Recording} />
          <Route path="/rehearsal" component={Rehearsal} />
      
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Studio Search</h1>
              </div>

              <div className="row">
                {/*<Recording />*/}
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
