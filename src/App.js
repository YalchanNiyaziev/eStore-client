import './App.css';
import Main from './components/Main';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import Cart from "./components/cart/Cart";
import Home from "./components/Home";
import NotFound from "./components/common/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppHeader/>
                <Switch>
                    <Route path='/cart' component={Cart}/>
                    <Route path ='/' exact component={Home}/>
                    <Route path='/products' component={Main}/>
                    <Route component={NotFound}/>
                </Switch>
                <AppFooter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
