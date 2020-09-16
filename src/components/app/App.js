import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import Home from '../home/home';
import Cart from '../cart/cart';


import {Provider} from 'react-redux';
import store from '../../redux/store'

import {BrowserRouter,Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className='content'>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>

        </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
