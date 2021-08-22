import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="tc">
                <Navbar title='Poké Cards' />
                <Switch>
                    <Route exact path='/' component={Home}
                    ></Route>
                    <Route exact path='/about' component={About}></Route>
                </Switch>

            </div>
        </Router>
    )

}


export default App;