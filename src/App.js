import React from 'react';
import './App.css';
import LogIn from "./components/screens/LogIn.js";
import Home from "./components/screens/Home";
import Products from "./components/screens/Products"
import Stores from "./components/screens/Stores"
import Deliveries from "./components/screens/Deliveries"
import Categories from "./components/screens/Categories"
import ProductDetail from './components/screens/ProductDetail'
import StoreDetail from './components/screens/StoreDetail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import history from './history'
import Header from './components/ui/Header'

function App() {
  return (
 
    <Router>      
      <Header/>       
         <Switch>                     
              <Route path='/' exact component={LogIn}/> 
              <Route path='/home' component={Home}/>              
              <Route path='/stores' component={Stores}/>
              <Route path='/store/:store' component={StoreDetail}></Route>  
              <Route path='/historial-entregas' component={Deliveries}/>  
              <Route path='/categorias' component={Categories}/>    
              <Route path='/productos' component={Products}/>
              <Route path='/product/:product' component={ProductDetail}></Route>
                                   
              
         </Switch>     
    </Router>
  
  );
  
}

export default App;
