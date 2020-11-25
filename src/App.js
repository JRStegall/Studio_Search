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
      <div className="App">
        <Navigate />
        <Switch>
          {/* <Route path="/" component={Home} />
          <Route path="/recording" component={Recording} />
          <Route path="/rehearsal" component={Rehearsal} />
          <Route path="/dance" component={Dance} />
          <Route path="/production" component={Production} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/search" component={Search}/>
          <Route path="/chat" component={Chat}/> */}

           
          <Route path="/login" > <Login /> </Route>
          <Route path="/register"> <Register /> </Route> 
          <Route path="/recording"> <Recording/> </Route> 
          <Route path="/rehearsal"> <Rehearsal/> </Route>
          <Route path="/dance"> <Dance /> </Route> 
          <Route path="/production"> <Production /> </Route> 
          <Route path="/search"> <Search /> </Route> 
          <Route path="/chat"> <Chat /> </Route>
          <Route path="/"><Home  /> </Route>
  
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;