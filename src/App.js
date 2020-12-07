import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
import './_redirects.txt';



function App() {



  return (
    <div className="App">
    {/* <Router> */}
        <Navigate />
        <Switch>
          <Route path="/recording" component={Recording} />
          <Route path="/rehearsal" component={Rehearsal} />
          <Route path="/dance" component={Dance} />
          <Route path="/production" component={Production} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/search" component={Search}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/" component={Home} />
        </Switch>
        
    </div>
  );
}

export default App;