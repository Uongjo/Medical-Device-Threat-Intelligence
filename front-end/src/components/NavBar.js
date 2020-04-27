import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'

class NavBar extends Component {
  state = {  }

  renderTabs() {
    
    const tabs = [
      {title: 'Dashboard', icon: "far fa-chart-bar", path: '/'},
      {title: 'Inventory', icon: "fas fa-hospital", path: '/inventory'},
      {title: 'Profile', icon: "fas fa-user", path: '/profile'},
      {title: 'Settings', icon: "fas fa-cog", path: '/settings'},
    ]

    return tabs.map((item, index) => (
      <Link key={index} to={item.path}>
        <div className="nav-tab">
          <i className={item.icon}/>
          <p>{item.title}</p>
        </div>
      </Link>
    ))
  }

  render() { 
    return (
      <div id="nav-bar">
        <img src={Logo} className="logo"/>
        {this.renderTabs()}
      </div>
    );
  }
}
 
export default NavBar;