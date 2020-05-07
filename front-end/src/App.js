import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/main.scss';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory'

class App extends Component {
  state = {  }

  getRoutes = () => {
    return(
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route exact path="/inventory">
          <Inventory/>
        </Route>
        <Route path="*">
          <div id="error-page">
            <h1>Error 404</h1>
            <h1>The page you are looking for does not exist.</h1>
          </div>
        </Route>
      </Switch>
    )
  }

  render() { 
    return (
      <div id="app">
        <Router>
          <NavBar/>
          <div id="main-container">
            {this.getRoutes()}
          </div>
        </Router>
      </div>
    );
  }
}
 
export default App;
