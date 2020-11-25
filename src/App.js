import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Recording from './components/Recording';
import Rehearsal from './components/Rehearsal';
import Dance from './components/Dance';
import Production from './components/Production';
import Navigate from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import Chat from './components/Chat';
import './App.css';



function App() {



  return (
    <Router>
     
        <Navigate />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/recording"><Recording/></Route>
          <Route path="/rehearsal" exact component={Rehearsal} />
          <Route path="/dance" component={Dance} />
          <Route path="/production" component={Production} />
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/search" component={Search}/>
          <Route path="/chat" component={Chat}/>

   
          {/* <div className="container">
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
          </div> */}
        </Switch>
        {/* <Footer /> */}
     
    </Router>
  );
}

export default App;