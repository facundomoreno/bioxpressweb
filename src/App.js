import React from 'react';
import './App.css';
import LogIn from "./components/screens/LogIn.js";
import Home from "./components/screens/Home";
import Products from "./components/screens/Products"
import UsersAndStores from "./components/screens/UsersAndStores"
import Deliveries from "./components/screens/Deliveries"
import Categories from "./components/screens/Categories"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import history from './history'

function App() {
  return (
 
    <Router history={history}>      
         <Switch>                     
              <Route path='/' exact component={LogIn}/>  
              <Route path='/home' component={Home}/>
              <Route path='/productos' component={Products}/>
              <Route path='/userstores' component={UsersAndStores}/>
              <Route path='/historial-entregas' component={Deliveries}/>  
              <Route path='/categorias' component={Categories}/>             
              
         </Switch>     
    </Router>
  
  );
  
}

export default App;
