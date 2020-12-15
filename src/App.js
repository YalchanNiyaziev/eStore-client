import './App.css';
import Home from './components/Home';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import Main from "./components/Main";
import Cart from "./components/cart/Cart";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <AppHeader/>

                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/cart'  component={Cart}/>
                            <Route path='/product'  component={Home}/>
                        </Switch>
                    <AppFooter/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
