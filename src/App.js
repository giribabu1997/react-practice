import React from 'react';
import {BrowserRouter,Route,Switch, } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Myprofile from './Myprofile/Myprofile';

import Myskills from './Myskills/Myskills';


function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/home" component = {Home}/>
     <Route path="/about" component= {About}/>
     <Route path="/myskills" component = {Myskills}/>
     <Route path="/myprofile" component = {Myprofile}/>
     
    
   </Switch>
   </BrowserRouter>
  );
}

export default App;