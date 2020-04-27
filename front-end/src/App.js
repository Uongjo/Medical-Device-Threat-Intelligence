import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/main.scss';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div id="app">
        <NavBar/>
        <Dashboard/>        
      </div>
    );
  }
}
 
export default App;
