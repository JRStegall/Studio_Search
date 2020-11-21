import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Recording from './Components/Recording';
import Rehearsal from './Components/Rehearsal';
import Dance from './Components/Dance';
import Production from './Components/Production';
import Navigate from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import Search from './Components/Search';
import Chat from './Components/Chat';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <Route path="/production" component={Production} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/search" component={Search}/>
          <Route path="/chat" component={Chat}/>

   
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