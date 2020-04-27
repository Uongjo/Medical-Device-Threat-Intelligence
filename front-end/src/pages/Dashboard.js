import React, { Component } from 'react';

class Dashboard extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      totalInventory: 700,
      animateTotal: 0
    }
  }

  componentDidMount() {
    this.updateCount()
  }

  updateCount = () => {
    if(this.state.animateTotal < this.state.totalInventory) {
      var animateTotal = this.state.animateTotal + 5
      setInterval(this.updateCount, 1)
      console.log("Here")
      this.setState({ animateTotal })
    }
  }

  render() { 
    return (
      <div id="dashboard">
        <h1>MEDICAL DEVICE THREAT INTELLIGENCE</h1>
        <h1>{this.state.animateTotal}</h1>
      </div>
    );
  }
}
 
export default Dashboard;