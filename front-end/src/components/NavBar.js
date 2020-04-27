import React, { Component } from 'react';
import Logo from '../images/logo.png'

class NavBar extends Component {
  state = {  }

  renderTabs() {
    var titles = ['Dashboard', 'Inventory', 'Profile', 'Settings']
    var icons = ["far fa-chart-bar", "fas fa-hospital", "fas fa-user", "fas fa-cog"]
    var tabs = []
    titles.forEach( (item, index) => {
      tabs.push(
        <div className="nav-tab">
          <i className={icons[index]}/>
          <p>{item}</p>
        </div>
      )
    })
    return tabs
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