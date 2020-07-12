import React from 'react';
import './App.css';
import LogIn from "./components/screens/LogIn.js";
import Home from "./components/screens/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import history from './history'

function App() {
  return (
 
    <Router history={history}>      
         <Switch>                     
              <Route path='/' exact component={LogIn}/>  
              <Route path='/home' component={Home}/>
              
         </Switch>     
    </Router>
  
  );
  
}

export default App;
